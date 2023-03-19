
import '../styles/admin/v2/main.scss'
import '../styles/style.scss'
import '../styles/admin/admin.style.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
