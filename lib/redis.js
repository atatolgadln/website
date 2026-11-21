import Redis from 'ioredis'

function fixUrl(url) {
  if (!url) {
    return ''
  }
  if (url.startsWith('redis://') && !url.startsWith('redis://:')) {
    return url.replace('redis://', 'redis://:')
  }
  if (url.startsWith('rediss://') && !url.startsWith('rediss://:')) {
    return url.replace('rediss://', 'rediss://:')
  }
  return url
}

let client = null

export function getRedis() {
  const rawUrl = process.env.REDIS_URL
  if (!rawUrl) {
    return null
  }

  if (!client) {
    client = new Redis(fixUrl(rawUrl), {
      maxRetriesPerRequest: 2,
      enableReadyCheck: false,
    })
    client.on('error', (err) => {
      console.error('Redis client error:', err?.message || err)
    })
  }

  return client
}

export default getRedis
