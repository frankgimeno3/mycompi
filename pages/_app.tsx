import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/navbar'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <title>Empleotecnic.com</title>
    <link rel="icon" href="/icons/minimal.png" />
  </Head>
  <Navbar/>
  <Component {...pageProps} />
  </>
    )
}
