import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import Header from '@/organisms/Header';
import Navbar from '@/organisms/Navbar';

const GlobalStyles = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body, #__next {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#__next {
  display: grid;
  grid-template-columns: 88px 1fr;
  grid-template-rows: 60px 1fr;
}
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />  
      <Navbar />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp