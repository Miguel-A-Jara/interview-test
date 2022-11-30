import { Html, Head, Main, NextScript } from 'next/document'

const Document = () =>  {
  return (
    <Html>
      <Head>
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css' />
      </Head>
      <body className='dark:bg-dark-900 bg-light-400 transition-colors duration-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;