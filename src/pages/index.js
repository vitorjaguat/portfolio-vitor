import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
        <meta property='og:image' content='./assets/006_010_thumb.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:type' content='article' />
        <meta property='og:locale' content='en_US' />
      </Head>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
