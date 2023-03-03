import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useParallax } from 'react-scroll-parallax';
import { useTranslation } from 'next-i18next';
import LanguageToggle from './LanguageToggle';

export default function Main(props) {
  // const bgParallax = useParallax({
  //   easing: 'easeIn',
  //   // speed: 10,
  //   // rootMargin: { bottom: 50, left: 0, right: 0, top: 700 },
  // });
  const { t } = useTranslation('common');

  return (
    <div className=''>
      <div
        // ref={bgParallax.ref}
        className='z-[-1] w-full h-screen bg-gradient-to-b from-orange-400 to-orange-100 '
      ></div>
      <div
        id='home'
        className='z-1 absolute top-0 left-0 w-full h-screen text-center'
      >
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            <LanguageToggle />
            <p className='uppercase text-sm tracking-widest text-gray-600'>
              {t('home.title')}
            </p>
            <h1 className='py-4 text-gray-700 text-5xl'>
              {t('home.hi')}
              {/* <span className='text-primary'>{t('home.name')}</span> */}
            </h1>
            <h1 className='py-2 text-gray-700 text-4xl'>
              {t('home.subtitle')}
            </h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
              {t('home.text')}
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <BsFillPersonFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
