import Page1 from '../componnts/UI/Navigation/Page1';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Page1>
      <Component {...pageProps} />
    </Page1>
  );
}

export default MyApp;
