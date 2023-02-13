import Page1 from '../componnts/UI/Navigation/Page1';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shivam</title>
      </Head>
      <Page1>
        <Component {...pageProps} />
      </Page1>
    </>
  );
}

export default MyApp;
