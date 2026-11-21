import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Link from 'next/link'
import Comment from '../../components/comment'
import Container from '../../components/container'
import { distanceToNow, formatFullDate } from '../../lib/dateRelative'
import { getAllPosts, getPostBySlug } from '../../lib/getPost'
import markdownToHtml from '../../lib/markdownToHtml'
import { PROFILE } from '../../lib/profileData'

export default function PostPage({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const formattedDate = post?.date ? formatFullDate(post.date) : ''
  const relativeDate = post?.date ? distanceToNow(post.date) : ''

  return (
    <Container narrow>
      <Head>
        <title>{`${post?.title || 'Post'} — ${PROFILE.name}`}</title>
        {post?.excerpt ? (
          <meta name="description" content={post.excerpt} />
        ) : null}
      </Head>

      <div className="article-shell">
        <Link href="/posts" className="back-link">
          <span aria-hidden="true">←</span>
          <span>All Posts</span>
        </Link>

        {router.isFallback ? (
          <p className="empty-state">Loading article…</p>
        ) : (
          <>
            <article>
              <header className="article-header">
                <div className="article-meta">
                  {formattedDate ? (
                    <time dateTime={post.date}>{formattedDate}</time>
                  ) : null}
                  {relativeDate ? (
                    <>
                      <span className="article-meta__sep" aria-hidden="true">
                        ·
                      </span>
                      <span>{relativeDate}</span>
                    </>
                  ) : null}
                  {post.readingTime ? (
                    <>
                      <span className="article-meta__sep" aria-hidden="true">
                        ·
                      </span>
                      <span>{post.readingTime}</span>
                    </>
                  ) : null}
                </div>

                <h1 className="article-title">{post.title}</h1>

                {post.excerpt ? (
                  <p className="article-excerpt">{post.excerpt}</p>
                ) : null}
              </header>

              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <Comment />
          </>
        )}
      </div>
    </Container>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'excerpt',
    'date',
    'content',
    'readingTime',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}
