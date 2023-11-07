import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // ここで Component と pageProps は適切に型付けされています。
  return <Component {...pageProps} />;
}

export default MyApp;
