import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects2 from '@/components/Projects2';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Main />
      <About />
      <Skills />
      <Projects2 />
      <Contact />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
