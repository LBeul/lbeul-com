import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/globals.css";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>lbeul.com</title>
      </Head>
      <div className="">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
