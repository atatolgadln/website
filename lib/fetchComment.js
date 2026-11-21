import { getRedis } from './redis'

export default async function fetchComment(req, res) {
  const { url } = req.query

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ message: 'Missing parameter.' })
  }

  const redis = getRedis()
  if (!redis) {
    return res.status(200).json([])
  }

  try {
    const rawComments = await redis.lrange(url, 0, -1)

    const comments = rawComments.reduce((acc, raw) => {
      try {
        const comment = JSON.parse(raw)
        if (comment?.user && 'email' in comment.user) {
          delete comment.user.email
        }
        acc.push(comment)
      } catch (_) {
        // Skip malformed comment entries
      }
      return acc
    }, [])

    return res.status(200).json(comments)
  } catch (_) {
    return res.status(500).json({ message: 'Unexpected error occurred.' })
  }
}
