import Head from "next/head";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>lbeul.com</title>
      </Head>
      <div className="font-sans flex flex-col items-center">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
