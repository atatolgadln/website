import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useAuth0 } from '@auth0/auth0-react'

export function isAuthConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_AUTH0_DOMAIN &&
      process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID
  )
}

async function fetcher(resource) {
  const response = await fetch(resource)
  if (!response.ok) {
    const data = await response.json().catch(() => ({}))
    throw new Error(data.message || 'Failed to load comments.')
  }
  return response.json()
}

export default function useComments() {
  const authEnabled = isAuthConfigured()
  const { getAccessTokenSilently } = useAuth0()
  const [text, setText] = useState('')
  const [url, setUrl] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [actionError, setActionError] = useState(null)

  const key = url ? `/api/comment?url=${encodeURIComponent(url)}` : null

  const {
    data: comments = [],
    error: fetchError,
    isLoading,
    mutate,
  } = useSWR(key, fetcher, {
    fallbackData: [],
  })

  useEffect(() => {
    setUrl(window.location.origin + window.location.pathname)
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!authEnabled || !url) return

    const trimmed = text.trim()
    if (!trimmed) {
      setActionError('Please write a comment before submitting.')
      return
    }

    setIsSubmitting(true)
    setActionError(null)

    try {
      const token = await getAccessTokenSilently()
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ url, text: trimmed }),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.message || 'Failed to post comment.')
      }

      setText('')
      await mutate()
    } catch (err) {
      setActionError(err?.message || 'Failed to post comment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const onDelete = async (comment) => {
    if (!authEnabled || !url || !comment?.id) return

    setActionError(null)

    try {
      const token = await getAccessTokenSilently()
      const response = await fetch('/api/comment', {
        method: 'DELETE',
        body: JSON.stringify({ url, comment }),
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.message || 'Failed to delete comment.')
      }

      await mutate()
    } catch (err) {
      setActionError(err?.message || 'Failed to delete comment.')
    }
  }

  const error = actionError || (fetchError ? fetchError.message : null)

  return {
    text,
    setText,
    comments,
    isLoading,
    isSubmitting,
    error,
    onSubmit,
    onDelete,
    authEnabled,
  }
}
