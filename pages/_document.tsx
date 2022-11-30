import { Html, Head, Main, NextScript } from 'next/document'

const Document = () =>  {
  return (
    <Html>
      <Head />
      <body className='dark:bg-dark-900 bg-light-400 transition-colors duration-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;