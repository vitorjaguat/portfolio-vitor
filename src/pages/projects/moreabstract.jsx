import Image from 'next/image';
import { useEffect } from 'react';
import moreabstractImg from '../../../public/assets/projects/moreabstract.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Moreabstract({}) {
  const { t } = useTranslation('projects');

  // useEffect(() => {}, []);

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-[3] bg-[url("/assets/projects/moreabstract.png")] opacity-50 bg-cover bg-repeat bg-bottom' />
        {/* <Image
          className='absolute z-1 translate-y-[-190px]'
          src={donadaImg}
          alt='screenshots'
        /> */}
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-orange-900 z-10 p-2'>
          <h2 className='py-2'>{t('moreabstract.title')}</h2>
          <h3>React / Next.js / Tailwind / Manifold</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          {/* <small>{t('blog.title')}</small> */}
          <div className='pb-8'>
            <h2 className='text-xl'>{t('moreabstract.summary')} </h2>
            <div className='py-3'>{t('moreabstract.summary-content')}</div>
          </div>
          <div className='pb-8'>
            <h2 className='text-xl'>{t('moreabstract.description')}</h2>
            <div className='py-3'>{t('moreabstract.description-p1')}</div>
            <div>{t('moreabstract.description-p2')}</div>
          </div>
          <div className='pb-8'>
            <h2 className='text-xl'>{t('moreabstract.technical')}</h2>
            <div className='py-3'>{t('moreabstract.technical-p1')}</div>
            <div className='py-3'>{t('moreabstract.technical-p2')}</div>
            <div className='py-3'>{t('moreabstract.technical-p3')}</div>
            <div className='py-3'>{t('moreabstract.technical-p4')}</div>
            <div className='py-3'>{t('moreabstract.technical-p5')}</div>
          </div>
          <a
            href='https://github.com/vitorjaguat/auction-page2'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>
              {t('moreabstract.code')}
            </button>
          </a>
          <a
            href='https://www.moreabstract.xyz/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>{t('moreabstract.demo')}</button>
          </a>
        </div>
        <div className='h-fit col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-3'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Manifold
              </p>

              {/* <p className='text-gray-600 py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Framer Motion
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Markdown
              </p> */}
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['projects', 'common'])), //have to add 'common' too, because of the navbar
    },
  };
}
