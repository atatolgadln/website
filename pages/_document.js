import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { PROFILE } from '../lib/profileData'

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`

export default class MyDocument extends NextDocument {
  render() {
    const title = `${PROFILE.name} | ${PROFILE.handle}`
    const description = PROFILE.bio
    const image = PROFILE.avatarUrl

    return (
      <Html lang="en" suppressHydrationWarning>
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@whattyu" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
        </Head>

        <body>
          <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
