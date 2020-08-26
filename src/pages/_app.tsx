import { AppProps } from 'next/app'

import Header from '@/organisms/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp