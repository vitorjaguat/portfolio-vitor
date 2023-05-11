import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import {
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [projectTypes, setProjectTypes] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? 'fixed top-0 left-0 w-full h-16 ease-in z-10 duration-300 bg-[#FFF7ED] opacity-90'
          : 'fixed top-0 left-0 z-10 w-full h-16 ease-in duration-200'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2'>
        <Link href='/#home' scroll={false}>
          {/* <Image
            src='/../public/assets/logoH2.png'
            alt='logo'
            width={50}
            height={50}
          /> */}
          <p className='font-bold text-orange-900'>vitorb.</p>
        </Link>
        <div className='hidden md:block'>
          <ul className='hidden md:flex'>
            <Link href='/#home' scroll={false}>
              <li className='text-sm uppercase hover:text-orange-900 '>
                {t('navbar.home')}
              </li>
            </Link>
            <Link href='/#about' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:text-orange-900 '>
                {t('navbar.about')}
              </li>
            </Link>
            <Link href='/#skills' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:text-orange-900 '>
                {t('navbar.skills')}
              </li>
            </Link>

            <li className='group ml-10 text-sm uppercase '>
              <Link href='/#authorial' scroll={false}>
                <div className='hover:text-orange-900'>
                  {t('navbar.projects')}
                </div>
              </Link>
              <div className='absolute lowercase overflow-hidden  -translate-y-40 group-hover:translate-y-0 transition-all duration-300'>
                <Link href='/#authorial' scroll={false}>
                  <div className='pt-4 pb-1 hover:text-orange-900'>
                    - {t('navbar.authorial')}
                  </div>
                </Link>
                <Link href='/#commissioned' scroll={false}>
                  <div className=' hover:text-orange-900'>
                    - {t('navbar.commissioned')}
                  </div>
                </Link>
              </div>
            </li>
            <Link href='/#contact' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:text-orange-900 '>
                {t('navbar.contact')}
              </li>
            </Link>
          </ul>
        </div>
        <div className='text-sm uppercase'>
          <LanguageToggle />
        </div>
        <div onClick={handleNav} className='md:hidden text-orange-900'>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-full h-full bg-black/70 ease-in transition-all duration-500'
            : 'fixed left-0 top-0 opacity-0 w-full h-full bg-transparent hidden ease-in transition-all duration-500'
        }
        style={{
          cursor: nav ? 'url(../../public/assets/close.svg) 15 15' : 'auto',
        }}
      />
      {/* sidebar */}
      <div
        className={
          nav
            ? 'fixed left-0 bottom-0 w-[45%] h-fit flex flex-col justify-between bg-orange-50 p-10 ease-in duration-500 rounded-tr-lg'
            : 'fixed w-[45%] h-fit flex flex-col justify-between bg-orange-50 bottom-0 left-[-100%] p-10 ease-in duration-500 rounded-tr-lg'
        }
      >
        {/* <div className='flex w-full items-center justify-between'>
          
          <div
            onClick={handleNav}
            className='rounded-full text-orange-700 border-orange-300 border-2 border-dashed shadow-sm p-2 cursor-pointer absolute right-0 top-0'
          >
            <GrFormClose size={20} />
          </div>
        </div>  */}

        <div className='flex flex-col justify-center'>
          <ul className='uppercase'>
            <Link href='/#home' scroll={false}>
              <li
                onClick={() => setNav(false)}
                className='py-4 text-sm hover:text-orange-900'
              >
                {t('navbar.home')}
              </li>
            </Link>
            <Link href='/#about' scroll={false}>
              <li
                onClick={() => setNav(false)}
                className='py-4 text-sm hover:text-orange-900'
              >
                {t('navbar.about')}
              </li>
            </Link>
            <Link href='/#skills' scroll={false}>
              <li
                onClick={() => setNav(false)}
                className='py-4 text-sm hover:text-orange-900'
              >
                {t('navbar.skills')}
              </li>
            </Link>

            <li
              onClick={() => setNav(false)}
              className='relative py-4 text-sm  group'
            >
              <Link href='/#authorial' scroll={false}>
                <div className='hover:text-orange-900'>
                  {t('navbar.projects')}
                </div>
              </Link>
              <div className='top-0 group-hover:translate-x-0 group-hover:h-auto h-0 overflow-hidden -translate-x-80 duration-300'>
                <Link href='/#authorial' scroll={false}>
                  <div className='lowercase hover:text-orange-900'>
                    - {t('navbar.authorial')}
                  </div>
                </Link>
                <Link href='/#commissioned' scroll={false}>
                  <div className='lowercase hover:text-orange-900'>
                    - {t('navbar.commissioned')}
                  </div>
                </Link>
              </div>
            </li>
            <Link href='/#contact' scroll={false}>
              <li
                onClick={() => setNav(false)}
                className='py-4 text-sm hover:text-orange-900'
              >
                {t('navbar.contact')}
              </li>
            </Link>
          </ul>
        </div>

        {/* <div className='w-full'>
          <p className='uppercase text-sm tracking-widest text-orange-700'>
            JOIN ME AT
          </p>
          <div className='flex items-center justify-between my-4 w-full'>
            <a
              href='https://github.com/vitorjaguat'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-full bg-orange-300 shadow-s p-2 cursor-pointer hover:scale-105 ease-in duration-500'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://www.instagram.com/mtc.cultura/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-full bg-orange-300 shadow-sm p-2 cursor-pointer hover:scale-105 ease-in duration-500'>
                <FaInstagram />
              </div>
            </a>
            <a
              href='https://t.me/jaguat'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-full bg-orange-300 shadow-sm p-2 cursor-pointer hover:scale-105 ease-in duration-500'>
                <FaTelegramPlane />
              </div>
            </a>
            <a
              href='https://wa.me/5511989417369'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='rounded-full bg-orange-300 shadow-sm p-2 cursor-pointer hover:scale-105 ease-in duration-500'>
                <FaWhatsapp />
              </div>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
