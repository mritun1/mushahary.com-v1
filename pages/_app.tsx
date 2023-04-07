
import '../styles/admin/v2/main.scss'
import '../styles/style.scss'
import '../styles/admin/admin.style.scss'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <>
      <NextNProgress color="red" startPosition={0.3} stopDelayMs={200} height={6} showOnShallow={true} />
      <Component {...pageProps} />;
    </>
  );
}
