import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/container'
import {
  PROFILE,
  PROJECTS,
  EXPERIENCE,
  SKILL_GROUPS,
  SOCIAL_LINKS,
} from '../lib/profileData'

export default function HomePage() {
  const curatedProjects = PROJECTS.slice(0, 4)
  const curatedSkills = SKILL_GROUPS.slice(0, 3)

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

            <div className="hero-content">
              <p className="hero-meta">
                <span>{PROFILE.location}</span>
                <span className="hero-meta__sep" aria-hidden="true">
                  ·
                </span>
                <span>@{PROFILE.githubUsername}</span>
              </p>

              <h1 id="hero-heading" className="hero-title">
                {PROFILE.name}
                <span className="hero-title__sub">{PROFILE.headline}</span>
              </h1>

              <p className="hero-bio">{PROFILE.bio}</p>

              <div className="hero-actions">
                <a id="cta-work" href="#work" className="btn btn--primary">
                  Selected Work
                </a>
                <a
                  id="cta-contact"
                  href="#contact"
                  className="btn btn--secondary"
                >
                  Get in Touch
                </a>
              </div>

              <div className="hero-socials" aria-label="Social profiles">
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

      {/* Selected Work */}
      <section id="work" className="section" aria-labelledby="work-heading">
        <Container>
          <div className="section-header">
            <div>
              <span className="section-eyebrow">01 · Portfolio</span>
              <h2 id="work-heading" className="section-title">
                Selected Work
              </h2>
            </div>
            <span className="section-count" aria-hidden="true">
              0{curatedProjects.length} Projects
            </span>
          </div>

          <div className="projects-grid">
            {curatedProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card__body">
                  <div className="project-card__top">
                    <span className="project-card__tag">
                      {project.tag || project.category}
                    </span>
                    <span className="project-card__year">{project.year}</span>
                  </div>

                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__summary">{project.summary}</p>
                </div>

                <div className="project-card__footer">
                  <ul className="tech-list" aria-label="Technologies used">
                    {project.tech.map((item) => (
                      <li key={item} className="tech-pill">
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
                        GitHub
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        className="project-link project-link--accent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* About — Journey & Stack */}
      <section id="about" className="section" aria-labelledby="about-heading">
        <Container>
          <div className="section-header">
            <div>
              <span className="section-eyebrow">02 · Background</span>
              <h2 id="about-heading" className="section-title">
                Journey &amp; Stack
              </h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-column">
              <h3 className="about-column__label">Timeline</h3>

              <ol className="timeline">
                {EXPERIENCE.map((item) => (
                  <li
                    key={`${item.period}-${item.title}`}
                    className="timeline__item"
                  >
                    <span className="timeline__marker" aria-hidden="true" />
                    <span className="timeline__period">{item.period}</span>
                    <h4 className="timeline__title">{item.title}</h4>
                    <span className="timeline__role">{item.role}</span>
                    <p className="timeline__desc">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="about-column">
              <h3 className="about-column__label">Core Stack</h3>

              <div className="skills-list">
                {curatedSkills.map((group) => (
                  <div key={group.label} className="skill-group">
                    <h4 className="skill-group__label">{group.label}</h4>
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

      {/* Contact */}
      <section id="contact" className="section" aria-labelledby="contact-heading">
        <Container>
          <div className="contact-card">
            <div className="contact-card__copy">
              <span className="section-eyebrow">03 · Contact</span>
              <h2 id="contact-heading" className="contact-card__title">
                Have a project or idea in mind?
              </h2>
              <p className="contact-card__text">
                Open to interesting software collaborations, web engineering,
                and practical machine learning work.
              </p>
            </div>

            <div className="contact-card__actions">
              <a
                id="contact-email"
                href={`mailto:${PROFILE.email}`}
                className="btn btn--primary"
              >
                Send an Email
              </a>
              <a
                id="contact-github"
                href={githubLink}
                className="btn btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
