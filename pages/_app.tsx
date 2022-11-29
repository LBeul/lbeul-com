import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Nav from '../components/Nav';
import NavBar from '../components/NavBar';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>lbeul.com</title>
      </Head>
      <div>
        <NavBar />
        <main>
          <Flex width='75%' mx='auto' my={5}>
            <Component {...pageProps} />
          </Flex>
        </main>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
