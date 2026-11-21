import { useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/container'
import { getAllPosts } from '../../lib/getPost'
import { formatFullDate } from '../../lib/dateRelative'
import { PROFILE } from '../../lib/profileData'

export default function PostsIndexPage({ allPosts = [] }) {
  const [query, setQuery] = useState('')

  const filteredPosts = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return allPosts

    return allPosts.filter((post) => {
      const title = (post.title || '').toLowerCase()
      const excerpt = (post.excerpt || '').toLowerCase()
      return title.includes(trimmed) || excerpt.includes(trimmed)
    })
  }, [allPosts, query])

  return (
    <>
      <Head>
        <title>{`Writing — ${PROFILE.name}`}</title>
        <meta
          name="description"
          content={`Articles, notes, and experiments by ${PROFILE.name}.`}
        />
      </Head>

      <Container narrow>
        <header className="page-intro">
          <span className="section-eyebrow">Notebook</span>
          <h1 className="page-intro__title">Writing</h1>
          <p className="page-intro__subtitle">
            Notes on web engineering, side projects, tools I build, and ideas
            worth documenting along the way.
          </p>

          <div className="search-wrap">
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="posts-search"
              type="search"
              className="search-input"
              placeholder="Search articles by title or topic…"
              aria-label="Search articles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </header>

        <section aria-label="Articles list">
          {filteredPosts.length ? (
            <div className="posts-list">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="post-row">
                  <Link href={`/posts/${post.slug}`} className="post-row__link">
                    <div className="post-row__meta">
                      <time dateTime={post.date}>
                        {formatFullDate(post.date)}
                      </time>
                      {post.readingTime ? (
                        <span className="post-row__reading">
                          {post.readingTime}
                        </span>
                      ) : null}
                    </div>

                    <div>
                      <h2 className="post-row__title">{post.title}</h2>
                      {post.excerpt ? (
                        <p className="post-row__excerpt">{post.excerpt}</p>
                      ) : null}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="empty-state">
              {query.trim()
                ? `No articles matched "${query.trim()}".`
                : 'No posts published yet.'}
            </p>
          )}
        </section>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'excerpt',
    'date',
    'readingTime',
  ])

  return {
    props: { allPosts },
  }
}
