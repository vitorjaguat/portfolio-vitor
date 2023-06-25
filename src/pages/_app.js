import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { Signika_Negative } from '@next/font/google';
import { useRouter } from 'next/router';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Script from 'next/script';

const signika = Signika_Negative({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--signika-font',
  display: 'swap',
});

const App = ({ Component, pageProps }) => {
  // const router = useRouter();
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((curr) => !curr);
  };
  console.log(darkMode);
  return (
    <>
      <Head>
        <title>Vitor Butkus</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/assets/favicon.ico' />

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
        <meta name='twitter:image' content='/assets/ogimage.png' />

        <meta property='og:title' content='Vitor Butkus' />
        <meta
          property='og:description'
          content='Webdevelopment projects and artworks by Vitor Butkus'
        />
        <meta property='og:image' content='/assets/ogimage.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:type' content='article' />
        <meta property='og:locale' content='en_US' />
        {/* reCAPTCHA */}
        <script
          src='https://www.google.com/recaptcha/api.js'
          async
          defer
        ></script>
      </Head>
      {/* GOOGLE-analytics https://www.makeuseof.com/nextjs-google-analytics/ */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GANALYTICS}`}
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main
        className={`${
          signika.variable
        } font-signika w-full overflow-x-hidden duration-300 ${
          darkMode ? 'dark' : ''
        }`}
      >
        <ParallaxProvider>
          <Navbar toggleDarkMode={toggleDarkMode} />
          <Component {...pageProps} />
        </ParallaxProvider>
      </main>
    </>
  );
};

export default appWithTranslation(App);
