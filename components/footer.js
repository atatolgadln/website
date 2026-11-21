import Container from './container'
import { PROFILE, SOCIAL_LINKS } from '../lib/profileData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__inner">
          <div className="site-footer__meta">
            <span>
              © {year} {PROFILE.name}
            </span>
            <span className="site-footer__sep" aria-hidden="true">
              ·
            </span>
            <span>{PROFILE.location}</span>
          </div>

          <nav className="site-footer__links" aria-label="Social links">
            {SOCIAL_LINKS.map((item) => {
              const isExternal = item.href.startsWith('http')
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="site-footer__link"
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
