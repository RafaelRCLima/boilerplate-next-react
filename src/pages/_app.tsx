import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="appl-touch-icon" href="/img/icon-512.png" />
        <link rel='manifest' href='../../manifest.json' />
        <meta
          name="description"
          content="An example to study React"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
