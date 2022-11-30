import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient }   from '@tanstack/react-query'

import '../styles/globals.css'

import ApplicationProvider from '../src/context/ApplicationProvider'

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider>
        <Component {...pageProps} />
      </ApplicationProvider>
    </QueryClientProvider>
  )
}
