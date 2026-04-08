import './globals.css'
import './responsive.css'
import type { Metadata } from 'next'
import { Poppins,Noto_Sans_Thai } from 'next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Script from 'next/script'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poppins',
})

const notoSansThai = Noto_Sans_Thai({
  weight: '400',
  subsets: ['latin']
})



const App = ({ Component, pageProps}: AppProps) => {
  const { locale } = useRouter();
  console.log(locale);
  return (
      <div className={locale == "th" ?notoSansThai.className:poppins.className }>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script  async src="https://www.googletagmanager.com/gtag/js?id=G-9SWYTXY800" />
        <Script id="google-analytics">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9SWYTXY800');
        `}</Script>
        <Component {...pageProps} />
      </div>
      
  )
}

export async function getStaticProps(context:any) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}
export default appWithTranslation(App)
