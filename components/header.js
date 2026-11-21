import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from './container'
import ThemeToggle from './themeToggle'

export default function Header() {
  const router = useRouter()
  const path = router.pathname
  const asPath = router.asPath || ''

  const isPosts = path === '/posts' || path.startsWith('/posts/')
  const isProjects = path === '/' && asPath.includes('#projects')
  const isAbout = path === '/' && !isProjects

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
              <Link
                id="nav-about"
                href="/"
                className={`site-nav__link${isAbout ? ' site-nav__link--active' : ''}`}
                aria-current={isAbout ? 'page' : undefined}
              >
                About
              </Link>
              <Link
                id="nav-projects"
                href="/#projects"
                className={`site-nav__link${isProjects ? ' site-nav__link--active' : ''}`}
              >
                Projects
              </Link>
              <Link
                id="nav-posts"
                href="/posts"
                className={`site-nav__link${isPosts ? ' site-nav__link--active' : ''}`}
                aria-current={isPosts ? 'page' : undefined}
              >
                Posts
              </Link>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
