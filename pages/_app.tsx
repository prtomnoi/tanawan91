import './globals.css'
import './responsive.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'



export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      </>
      
  )
}
