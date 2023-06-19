import Footer from "components/layouts/Footer";
import Header from "components/layouts/Header";
import "styles/globals.css";
import "styles/layout.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  if (Component.getLayout) {
    return (
      Component.getLayout(<Component {...pageProps} />)
    )
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
