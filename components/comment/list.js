import { distanceToNow } from '../../lib/dateRelative'

export default function CommentList({
  comments = [],
  onDelete,
  currentUser = null,
  isLoading = false,
}) {
  if (isLoading && !comments.length) {
    return <p className="comment-empty">Loading comments…</p>
  }

  if (!comments.length) {
    return (
      <p className="comment-empty">
        No comments yet. Be the first to share your thoughts.
      </p>
    )
  }

  return (
    <div className="comment-list" role="list">
      {comments.map((comment) => {
        const isAuthor =
          currentUser && comment.user && currentUser.sub === comment.user.sub
        const isAdmin =
          currentUser &&
          process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL &&
          currentUser.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL
        const canDelete = Boolean(onDelete && (isAdmin || isAuthor))

        return (
          <article
            key={comment.id || comment.created_at}
            className="comment-item"
            role="listitem"
          >
            {comment.user?.picture ? (
              <img
                src={comment.user.picture}
                alt={comment.user.name || 'Comment author'}
                width={38}
                height={38}
                className="comment-item__avatar"
                loading="lazy"
              />
            ) : (
              <div className="comment-item__avatar" aria-hidden="true" />
            )}

            <div className="comment-item__body">
              <div className="comment-item__header">
                <span className="comment-item__author">
                  {comment.user?.name || 'Anonymous'}
                </span>
                {comment.created_at ? (
                  <time
                    className="comment-item__time"
                    dateTime={new Date(comment.created_at).toISOString()}
                  >
                    {distanceToNow(comment.created_at)}
                  </time>
                ) : null}
                {canDelete ? (
                  <button
                    type="button"
                    className="comment-item__delete"
                    onClick={() => onDelete(comment)}
                    aria-label={`Delete comment by ${comment.user?.name || 'author'}`}
                  >
                    Delete
                  </button>
                ) : null}
              </div>

              <p className="comment-item__text">{comment.text}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
