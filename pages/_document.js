import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { PROFILE } from '../lib/profileData'

const themeInitScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    var theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`

export default class MyDocument extends NextDocument {
  render() {
    const title = `${PROFILE.name} — ${PROFILE.handle}`
    const description = PROFILE.bio
    const image = PROFILE.avatarUrl

    return (
      <Html lang="en" data-theme="dark" suppressHydrationWarning>
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={description} />
          <meta name="theme-color" content="#0f1115" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={PROFILE.siteUrl} />
          <meta property="og:site_name" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={`@${PROFILE.githubUsername}`} />
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
