import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import CommentForm from './form'
import CommentList from './list'
import useComments, { isAuthConfigured } from '../../hooks/useComment'

function AuthenticatedComments() {
  const { user } = useAuth0()
  const {
    text,
    setText,
    comments,
    isLoading,
    isSubmitting,
    error,
    onSubmit,
    onDelete,
  } = useComments()

  return (
    <section className="comments-section" aria-labelledby="comments-heading">
      <div className="comments-section__header">
        <h2 id="comments-heading" className="comments-section__title">
          Discussion
        </h2>
        <span className="comments-section__count">
          {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
        </span>
      </div>

      {error ? (
        <div className="comment-error" role="alert">
          {error}
        </div>
      ) : null}

      <CommentForm
        onSubmit={onSubmit}
        text={text}
        setText={setText}
        isSubmitting={isSubmitting}
      />

      <CommentList
        comments={comments}
        onDelete={onDelete}
        currentUser={user}
        isLoading={isLoading}
      />
    </section>
  )
}

function ReadOnlyComments() {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let active = true
    const url = window.location.origin + window.location.pathname

    fetch(`/api/comment?url=${encodeURIComponent(url)}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (active && Array.isArray(data)) {
          setComments(data)
        }
      })
      .catch(() => {
        // Silently degrade to empty list in offline/local preview mode
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <section className="comments-section" aria-labelledby="comments-heading">
      <div className="comments-section__header">
        <h2 id="comments-heading" className="comments-section__title">
          Discussion
        </h2>
        {!isLoading ? (
          <span className="comments-section__count">
            {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
          </span>
        ) : null}
      </div>

      <p className="comment-notice">
        Comments are currently in read-only mode — sign-in is disabled in this
        environment.
      </p>

      <CommentList
        comments={comments}
        currentUser={null}
        isLoading={isLoading}
      />
    </section>
  )
}

export default function Comment() {
  if (!isAuthConfigured()) {
    return <ReadOnlyComments />
  }

  return <AuthenticatedComments />
}
