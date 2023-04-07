
import '../styles/admin/v2/main.scss'
import '../styles/style.scss'
import '../styles/admin/admin.style.scss'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <>
      <NextNProgress color="red" startPosition={0.3} stopDelayMs={200} height={6} showOnShallow={true} />
      <Component {...pageProps} />;
    </>
  );
}
