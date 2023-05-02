import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact2 from '@/components/Contact2';

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact2 />
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
