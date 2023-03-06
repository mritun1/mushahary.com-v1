
import '../styles/admin/v2/main.scss'
import '../styles/style.css'
//import '../styles/admin/admin.style.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
