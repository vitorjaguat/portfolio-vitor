import Image from 'next/image';
import { useEffect } from 'react';
import blogImg from '../../../public/assets/projects/blog.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Blog({}) {
  const { t } = useTranslation('projects');

  // useEffect(() => {}, []);

  return (
    <div className='w-full dark:bg-zinc-600 pb-40'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-white/40 dark:bg-black/60 z-[3]' />
        <Image
          className='absolute z-1 scale-150 md:scale-100 md:translate-y-[-190px] dark:opacity-60'
          src={blogImg}
          alt='screenshots'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-orange-900 dark:text-orange-300 z-10 p-2'>
          <h2 className='py-2'>{t('blog.title')}</h2>
          <h3>React / Next.js / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 dark:text-gray-200'>
        <div className='col-span-4'>
          {/* <small>{t('blog.title')}</small> */}
          <div className='pb-8'>
            <h2 className='text-xl'>{t('blog.summary')} </h2>
            <div className='py-3'>{t('blog.summary-content')}</div>
          </div>
          <div className='pb-8'>
            <h2 className='text-xl'>{t('blog.description')}</h2>
            <div className='py-3'>{t('blog.description-p1')}</div>
            <div className='pb-3'>{t('blog.description-p2')}</div>
          </div>
          <div className='pb-8'>
            <h2 className='text-xl'>{t('blog.technical')}</h2>
            <div className='py-3'>{t('blog.technical-p1')}</div>
            <div className='pb-3'>{t('blog.technical-p2')}</div>
            <div className='pb-3'>{t('blog.technical-p3')}</div>
            <div className='pb-3'>{t('blog.technical-p4')}</div>
            <div className='pb-3'>{t('blog.technical-p5')}</div>
          </div>
          <div className='flex justify-center'>
            <a
              href='https://github.com/vitorjaguat/blog-nextjs'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4 mr-8'>{t('blog.code')}</button>
            </a>
            <a
              href='https://blog-nextjs-not.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='px-8 py-2 mt-4'>{t('blog.demo')}</button>
            </a>
          </div>
        </div>
        <div className='h-fit col-span-4 md:col-span-1 rounded-lg bg-black/5 dark:bg-white/5 mt-10 md:mt-0 p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-3'>
              {t('common.technologies')}
            </p>
            <div className='grid grid-cols-3 md:grid-cols-1 dark:text-gray-200 text-gray-600'>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Next.js
              </p>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> React JS
              </p>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Tailwind
              </p>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Firebase
              </p>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Framer Motion
              </p>
              <p className='py-2 flex items-center'>
                <FiCheck size={25} className='pr-3' /> Markdown
              </p>
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
