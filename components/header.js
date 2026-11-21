import Link from 'next/link'
import Container from './container'
import ThemeToggle from './themeToggle'

export default function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link href="/" className="site-brand">
            <span className="site-brand__name">Ata Tolga</span>
            <span className="site-brand__handle">/ whattyu</span>
          </Link>

          <div className="site-header__right">
            <nav className="site-nav" aria-label="Primary">
              <a id="nav-work" href="#work" className="site-nav__link">
                Work
              </a>
              <a id="nav-about" href="#about" className="site-nav__link">
                About
              </a>
              <a id="nav-contact" href="#contact" className="site-nav__link">
                Contact
              </a>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
