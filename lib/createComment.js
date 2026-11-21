import { randomUUID } from 'crypto'
import { getRedis } from './redis'
import getUser from './getUser'

const MAX_COMMENT_LENGTH = 1000

export default async function createComment(req, res) {
  const redis = getRedis()
  if (!redis) {
    return res
      .status(503)
      .json({ message: 'Comments storage is not configured.' })
  }

  const { url, text } = req.body || {}
  const { authorization } = req.headers

  if (!url || typeof url !== 'string' || !authorization) {
    return res.status(400).json({ message: 'Missing parameter.' })
  }

  const trimmedText = typeof text === 'string' ? text.trim() : ''
  if (!trimmedText) {
    return res.status(400).json({ message: 'Comment text cannot be empty.' })
  }
  if (trimmedText.length > MAX_COMMENT_LENGTH) {
    return res.status(400).json({
      message: `Comment text cannot exceed ${MAX_COMMENT_LENGTH} characters.`,
    })
  }

  try {
    const user = await getUser(authorization)
    if (!user || !user.sub) {
      return res.status(401).json({ message: 'Need authorization.' })
    }

    const { name, picture, sub, email } = user

    const comment = {
      id: randomUUID(),
      created_at: Date.now(),
      url,
      text: trimmedText,
      user: { name, picture, sub, email },
    }

    await redis.lpush(url, JSON.stringify(comment))

    const sanitizedComment = {
      ...comment,
      user: { name, picture, sub },
    }

    return res.status(200).json(sanitizedComment)
  } catch (_) {
    return res.status(500).json({ message: 'Unexpected error occurred.' })
  }
}
