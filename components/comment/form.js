import { useAuth0 } from '@auth0/auth0-react'

export default function CommentForm({
  text,
  setText,
  onSubmit,
  isSubmitting = false,
}) {
  const { isAuthenticated, logout, loginWithPopup, isLoading } = useAuth0()

  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <label htmlFor="comment-textarea" className="comment-form__label">
        Leave a note
      </label>
      <textarea
        id="comment-textarea"
        className="comment-form__textarea"
        rows="3"
        placeholder={
          isAuthenticated
            ? 'Share your thoughts on this post…'
            : 'Sign in to join the conversation'
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated || isSubmitting}
      />

      <div className="comment-form__actions">
        {isAuthenticated ? (
          <div className="comment-form__buttons">
            <button
              id="comment-submit"
              type="submit"
              className="btn btn--primary"
              disabled={isSubmitting || !text.trim()}
            >
              {isSubmitting ? 'Posting…' : 'Post Comment'}
            </button>
            <button
              id="comment-logout"
              type="button"
              className="btn btn--ghost"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
            >
              Log out
            </button>
          </div>
        ) : (
          <button
            id="comment-login"
            type="button"
            className="btn btn--primary"
            disabled={isLoading}
            onClick={() => loginWithPopup()}
          >
            {isLoading ? 'Checking session…' : 'Log in to comment'}
          </button>
        )}
      </div>
    </form>
  )
}
