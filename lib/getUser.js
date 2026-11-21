export default async function getUser(token) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
  if (!domain || !token) {
    return null
  }

  const cleanToken = String(token).replace(/^Bearer\s+/i, '').trim()
  if (!cleanToken) {
    return null
  }

  try {
    const response = await fetch(`https://${domain}/userinfo`, {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (_) {
    return null
  }
}
