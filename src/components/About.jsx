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
      className='w-full p-2 flex items-center py-20 bg-gradient-to-b from-orange-100 to-transparent overflow-hidden'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 lg:pr-20'>
          <p className='text-2xl font-bold tracking-[10px] uppercase text-orange-900 pb-12'>
            {t('about.title')}
          </p>
          {/* <h2 className='py-4'>{t('about.subtitle')}</h2> */}
          {/* <p className='py-2 text-gray-600'>{t('about.small')}</p> */}
          <p className='py-2 text-gray-600'>{t('about.p1')}</p>
          <p className='py-2 text-gray-600'>{t('about.p2')}</p>
          <p className='py-2 text-gray-600'>{t('about.p3')}</p>
          <Link href='/#authorial' scroll={false}>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              {t('about.link')}
            </p>
          </Link>
        </div>
        <div className='col-span-1 flex justify-center mt-8'>
          <div
            ref={ref}
            style={{
              transform: inView ? 'none' : 'translateX(100%)',
              transition: 'all 1s',
            }}
            className='w-fit h-fit shadow-md p-2 bg-white shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-100'
          >
            <Image
              width={250}
              className='rounded-xl'
              src={vitorImg}
              alt='Vitor'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
