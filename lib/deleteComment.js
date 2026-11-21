import { getRedis } from './redis'
import getUser from './getUser'

export default async function deleteComment(req, res) {
  const redis = getRedis()
  if (!redis) {
    return res
      .status(503)
      .json({ message: 'Comments storage is not configured.' })
  }

  const { url, comment } = req.body || {}
  const { authorization } = req.headers

  if (!url || typeof url !== 'string' || !comment?.id || !authorization) {
    return res.status(400).json({ message: 'Missing parameter.' })
  }

  try {
    const user = await getUser(authorization)
    if (!user || !user.sub) {
      return res.status(401).json({ message: 'Invalid token.' })
    }

    const rawEntries = await redis.lrange(url, 0, -1)
    let matchedRaw = null
    let storedComment = null

    for (const raw of rawEntries) {
      try {
        const parsed = JSON.parse(raw)
        if (parsed?.id === comment.id) {
          matchedRaw = raw
          storedComment = parsed
          break
        }
      } catch (_) {
        // Ignore malformed entries
      }
    }

    if (!matchedRaw || !storedComment) {
      return res.status(404).json({ message: 'Comment not found.' })
    }

    const adminEmail = process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL
    const isAdmin = Boolean(adminEmail && user.email === adminEmail)
    const isAuthor = Boolean(storedComment.user?.sub === user.sub)

    if (!isAdmin && !isAuthor) {
      return res.status(403).json({ message: 'Need authorization.' })
    }

    await redis.lrem(url, 1, matchedRaw)

    return res.status(200).json({ deleted: true, id: comment.id })
  } catch (_) {
    return res.status(500).json({ message: 'Unexpected error occurred.' })
  }
}
