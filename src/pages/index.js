import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return <div className=''>lallalalaa</div>;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
