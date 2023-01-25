import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>lbeul</title>
      </Head>
      <>
        <NavBar />
        <main>
          <Flex width='75%' mx='auto' my={5}>
            <Component {...pageProps} />
          </Flex>
        </main>
        <Footer />
      </>
    </ChakraProvider>
  );
}

export default MyApp;
