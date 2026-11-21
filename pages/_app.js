import '../styles/globals.css'

import Head from 'next/head'
import {
  Instrument_Serif,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from 'next/font/google'
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

export default function MyApp({ Component, pageProps }) {
  const fontClasses = `${instrumentSerif.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`

  return (
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
}
