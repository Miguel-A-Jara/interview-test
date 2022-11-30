import type { AppProps } from 'next/app'
import '../styles/globals.css'

import ApplicationProvider from '../src/context/ApplicationProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApplicationProvider>
      <Component {...pageProps} />
    </ApplicationProvider>
  )
}
