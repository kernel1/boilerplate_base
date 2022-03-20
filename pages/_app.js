import Head from "next/head";

import "../styles/reset.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Base App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
