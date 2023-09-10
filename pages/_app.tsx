import './globals.css'
import './responsive.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poppins',
})



export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
      
  )
}
