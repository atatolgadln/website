import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/container'
import {
  PROFILE,
  PROJECTS,
  EXPERIENCE,
  SKILL_GROUPS,
  SOCIAL_LINKS,
} from '../lib/profileData'
import { getAllPosts } from '../lib/getPost'
import { formatFullDate } from '../lib/dateRelative'

const CATEGORIES = [
  { id: 'filter-all', value: 'All', label: 'All' },
  { id: 'filter-web', value: 'Web', label: 'Web' },
  { id: 'filter-ml-python', value: 'ML & Python', label: 'ML & Python' },
  { id: 'filter-mobile', value: 'Mobile', label: 'Mobile' },
  { id: 'filter-bots-tools', value: 'Bots & Tools', label: 'Bots & Tools' },
]

export default function HomePage({ recentPosts = [] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory)

  const githubLink =
    SOCIAL_LINKS.find((link) => link.id === 'github')?.href ||
    `https://github.com/${PROFILE.githubUsername}`

  return (
    <>
      <Head>
        <title>{`${PROFILE.name} — ${PROFILE.handle}`}</title>
        <meta name="description" content={PROFILE.bio} />
      </Head>

      {/* Hero Section */}
      <section className="section section--hero" aria-labelledby="hero-heading">
        <Container>
          <div className="hero-grid">
            <div className="hero-avatar-wrap">
              <Image
                src={PROFILE.avatarUrl}
                alt={PROFILE.name}
                width={88}
                height={88}
                className="hero-avatar"
                priority
              />
            </div>

            <div>
              <div className="hero-meta">
                <span className="hero-meta__dot" aria-hidden="true" />
                <span>Based in {PROFILE.location}</span>
                <span className="hero-meta__sep" aria-hidden="true">
                  /
                </span>
                <span>Software Developer</span>
              </div>

              <h1 id="hero-heading" className="hero-title">
                {PROFILE.name}
                <span className="hero-title__sub">{PROFILE.headline}</span>
              </h1>

              <p className="hero-bio">{PROFILE.bio}</p>

              <div className="hero-actions">
                <a
                  id="cta-projects"
                  href="#projects"
                  className="btn btn--primary"
                >
                  Explore Projects
                </a>
                <Link
                  id="cta-writing"
                  href="/posts"
                  className="btn btn--secondary"
                >
                  Read Writing
                </Link>
              </div>

              <div className="hero-socials" aria-label="Profiles">
                {SOCIAL_LINKS.map((item) => {
                  const isExternal = item.href.startsWith('http')
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className="hero-social-link"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      <span>{item.label}</span>
                      <span className="hero-social-link__handle">
                        {item.handle}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Projects */}
      <section
        id="projects"
        className="section"
        aria-labelledby="projects-heading"
      >
        <Container>
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Selected Work</span>
              <h2 id="projects-heading" className="section-title">
                Projects
              </h2>
            </div>

            <div
              className="filter-tabs"
              role="group"
              aria-label="Filter projects by category"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category.value
                return (
                  <button
                    key={category.value}
                    id={category.id}
                    type="button"
                    className={`filter-tab${isActive ? ' filter-tab--active' : ''}`}
                    onClick={() => setActiveCategory(category.value)}
                    aria-pressed={isActive}
                  >
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div>
                  <div className="project-card__top">
                    <span className="project-card__category">
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__summary">{project.summary}</p>
                </div>

                <div className="project-card__footer">
                  <ul className="tech-list" aria-label="Technologies used">
                    {project.tech.map((item) => (
                      <li key={item} className="tech-tag">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="project-card__links">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        className="project-link project-link--primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Journey & Skills */}
      <section className="section" aria-labelledby="journey-heading">
        <Container>
          <div className="journey-grid">
            <div>
              <span className="section-eyebrow">Timeline</span>
              <h2 id="journey-heading" className="subsection-title">
                Journey
              </h2>

              <ol className="timeline">
                {EXPERIENCE.map((item) => (
                  <li
                    key={`${item.period}-${item.title}`}
                    className="timeline__item"
                  >
                    <span className="timeline__marker" aria-hidden="true" />
                    <span className="timeline__period">{item.period}</span>
                    <h3 className="timeline__heading">{item.title}</h3>
                    <span className="timeline__role">{item.role}</span>
                    <p className="timeline__desc">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <span className="section-eyebrow">Capabilities</span>
              <h2 className="subsection-title">Tools & Stack</h2>

              <div className="skills-list">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.label} className="skill-group">
                    <h3 className="skill-group__label">{group.label}</h3>
                    <ul className="skill-group__items">
                      {group.items.map((skill) => (
                        <li key={skill} className="skill-pill">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Recent Writing */}
      <section className="section" aria-labelledby="writing-heading">
        <Container>
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Notebook</span>
              <h2 id="writing-heading" className="section-title">
                Recent Writing
              </h2>
            </div>

            <Link href="/posts" className="section-link">
              View all posts
              <span className="section-link__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {recentPosts.length ? (
            <div className="posts-list">
              {recentPosts.map((post) => (
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
                      <h3 className="post-row__title">{post.title}</h3>
                      {post.excerpt ? (
                        <p className="post-row__excerpt">{post.excerpt}</p>
                      ) : null}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="empty-state">No posts published yet.</p>
          )}
        </Container>
      </section>

      {/* Contact Banner */}
      <section className="section" aria-labelledby="contact-heading">
        <Container>
          <div className="contact-banner">
            <div className="contact-banner__copy">
              <span className="section-eyebrow">Get in Touch</span>
              <h2 id="contact-heading" className="contact-banner__title">
                Have a project or idea in mind?
              </h2>
              <p className="contact-banner__text">
                Always glad to talk about web engineering, practical machine
                learning tools, or interesting software collaborations.
              </p>
            </div>

            <div className="contact-banner__actions">
              <a
                id="contact-email"
                href={`mailto:${PROFILE.email}`}
                className="btn btn--primary"
              >
                Email Me
              </a>
              <a
                id="contact-github"
                href={githubLink}
                className="btn btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </Container>
      </section>
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
    props: {
      recentPosts: allPosts.slice(0, 3),
    },
  }
}
