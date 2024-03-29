import Link from 'next/link';
import { useParallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import vitorImg from '../../public/assets/vitor.jpeg';

export default function About() {
  // const imgParallax = useParallax({
  //   translateX: [40, 0],
  //   opacity: [0.5, 1],
  //   // endScroll: 50,
  //   // easing: 'easeOut',
  //   rootMargin: {
  //     top: 400,
  //     right: 0,
  //     bottom: -800,
  //     left: 0,
  //   },
  //   shouldAlwaysCompleteAnimation: true,

  // });

  const { ref, inView, entry } = useInView({});

  const { t } = useTranslation('common');

  return (
    <div
      id='about'
      className='w-full p-2 flex items-center py-20 bg-gradient-to-b from-orange-100 to-transparent overflow-hidden dark:from-zinc-600 dark:to-zinc-600'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 lg:pr-20'>
          <p className='text-2xl font-bold tracking-[10px] uppercase text-orange-900 dark:text-orange-300 pb-12'>
            {t('about.title')}
          </p>
          {/* <h2 className='py-4'>{t('about.subtitle')}</h2> */}
          {/* <p className='py-2 text-gray-600'>{t('about.small')}</p> */}
          <div className='dark:text-gray-200 text-gray-600'>
            <p className='py-2'>{t('about.p1')}</p>
            <p className='py-2'>{t('about.p2')}</p>
            <p className='py-2'>{t('about.p3')}</p>
            <Link href='/#authorial' scroll={false}>
              <p className='py-2 underline cursor-pointer'>{t('about.link')}</p>
            </Link>
          </div>
        </div>
        <div className='col-span-1 flex justify-center mt-8'>
          <div
            ref={ref}
            style={{
              transform: inView ? 'none' : 'translateX(100%)',
              transition: 'all 1s',
            }}
            className='w-fit h-fit p-2 bg-white dark:bg-zinc-300 rounded-md duration-300'
          >
            <Image
              width={230}
              className='rounded-md'
              src={vitorImg}
              alt='Vitor'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
