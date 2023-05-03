import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { Signika_Negative } from '@next/font/google';
import { useRouter } from 'next/router';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '@/components/Navbar';

const signika = Signika_Negative({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--signika-font',
  display: 'swap',
});

const App = ({ Component, pageProps }) => {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>Vitor Butkus</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/tiger.png' />

        <meta name='author' content='Vitor Butkus' />
        <meta
          name='description'
          content='Webdevelopment projects and artworks by Vitor Butkus'
        />
        <meta name='keywords' content='developer, digital art, tcm' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@jag_uat' />
        <meta name='twitter:title' content='Vitor Butkus' />
        <meta
          name='twitter:description'
          content='Webdevelopment projects and artworks by Vitor Butkus'
        />
        <meta name='twitter:image' content='/tiger.png' />

        <meta property='og:title' content='Vitor Butkus' />
        <meta
          property='og:description'
          content='Webdevelopment projects and artworks by Vitor Butkus'
        />
        <meta property='og:image' content='/tiger.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:type' content='article' />
        <meta property='og:locale' content='en_US' />
      </Head>
      <ParallaxProvider>
        <main
          className={`${signika.variable} font-signika w-screen overflow-hidden`}
        >
          <Navbar />
          <Component {...pageProps} />
        </main>
      </ParallaxProvider>
    </>
  );
};

export default appWithTranslation(App);
