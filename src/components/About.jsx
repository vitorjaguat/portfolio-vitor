import Link from 'next/link';
import { useParallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';

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
      className='w-full p-2 flex items-center py-20 bg-gradient-to-b from-orange-100 to-transparent'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-5 gap-8'>
        <div className='col-span-3 lg:pr-20'>
          <p className='uppercase text-xl tracking-widest text-primary'>
            {t('about.title')}
          </p>
          <h2 className='py-4'>{t('about.subtitle')}</h2>
          <p className='py-2 text-gray-600'>{t('about.small')}</p>
          <p className='py-2 text-gray-600'>{t('about.p1')}</p>
          <p className='py-2 text-gray-600'>{t('about.p2')}</p>
          <p className='py-2 text-gray-600'>{t('about.p3')}</p>
          <Link href='/#projects' scroll={false}>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              {t('about.link')}
            </p>
          </Link>
        </div>
        <div
          ref={ref}
          style={{
            transform: inView ? 'none' : 'translateX(100%)',
            backgroundColor: inView ? 'red' : 'blue',
            transition: 'all 1s',
          }}
          className='col-span-2 w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-100'
        >
          <img
            className='rounded-xl'
            src='https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='studio'
          />
        </div>
      </div>
    </div>
  );
}
