import '../styles/globals.css'

import Head from 'next/head'
import {
  Instrument_Serif,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from 'next/font/google'
import { Auth0Provider } from '@auth0/auth0-react'
import Header from '../components/header'
import Footer from '../components/footer'
import { PROFILE } from '../lib/profileData'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const auth0Domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
const auth0ClientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID
const isAuth0Enabled = Boolean(auth0Domain && auth0ClientId)

export default function MyApp({ Component, pageProps }) {
  const fontClasses = `${instrumentSerif.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`

  const appContent = (
    <div className={`app-shell ${fontClasses}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`${PROFILE.name} — ${PROFILE.handle}`}</title>
        <link rel="icon" href={PROFILE.avatarUrl} />
      </Head>

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main-content" className="app-main">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  )

  if (isAuth0Enabled) {
    return (
      <Auth0Provider
        domain={auth0Domain}
        clientId={auth0ClientId}
        authorizationParams={{
          redirect_uri:
            typeof window !== 'undefined' ? window.location.origin : undefined,
        }}
      >
        {appContent}
      </Auth0Provider>
    )
  }

  return appContent
}
