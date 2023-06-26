import Image from 'next/image';
import { useEffect } from 'react';
import hanziImg from '../../../public/assets/projects/hanzi.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Hanzi({}) {
  const { t } = useTranslation('projects');

  // useEffect(() => {}, []);

  return (
    <div className='w-full dark:bg-zinc-600 pb-40'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-[3] bg-[url("/assets/projects/hanzi.png")] opacity-50 dark:opacity-90 dark:brightness-[0.35] bg-cover bg-repeat bg-bottom' />
        {/* <Image
          className='absolute z-1 translate-y-[-190px]'
          src={donadaImg}
          alt='screenshots'
        /> */}
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-orange-900 dark:text-orange-300 z-10 p-2'>
          <h2 className='py-2'>{t('hanzi.title')}</h2>
          <h3>React / Next.js / Tailwind</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 dark:text-gray-200'>
        <div className='col-span-4'>
          {/* <small>{t('blog.title')}</small> */}
          <div className='pb-8'>
            <h2 className='text-xl'>{t('hanzi.summary')} </h2>
            <div className='py-3'>{t('hanzi.summary-content')}</div>
          </div>
          <div className='pb-8'>
            <h2 className='text-xl'>{t('hanzi.description')}</h2>
            <div className='py-3'>{t('hanzi.description-p1')}</div>
            <div>{t('hanzi.description-p2')}</div>
          </div>
          <div className='pb-8'>
            <h2 className='text-xl'>{t('hanzi.technical')}</h2>
            <div className='py-3'>{t('hanzi.technical-p1')}</div>
            <div className='py-3'>{t('hanzi.technical-p2')}</div>
            <div className='py-3'>{t('hanzi.technical-p3')}</div>
            <div className='py-3'>{t('hanzi.technical-p4')}</div>
            <div className='py-3'>{t('hanzi.technical-p5')}</div>
          </div>
          <div className='flex justify-center'>
            <a
              href='https://github.com/vitorjaguat/hanzi-draw'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4 mr-8'>{t('hanzi.code')}</button>
            </a>
            <a
              href='https://hanzi-draw.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4'>{t('hanzi.demo')}</button>
            </a>
          </div>
        </div>
        <div className='h-fit col-span-4 md:col-span-1 rounded-lg bg-black/5 dark:bg-white/5 mt-10 md:mt-0 p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-3'>
              {t('common.technologies')}
            </p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> React
              </p>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Next.js
              </p>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Tailwind
              </p>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Node.js
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
        <Link className='mt-10' href='/#projects'>
          <p className='underline cursor-pointer'>{t('common.back')}</p>
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
