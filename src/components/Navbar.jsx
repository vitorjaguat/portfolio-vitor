import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';

export default function Navbar({ navColor }) {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
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
          ? 'fixed w-full h-20 shadow-lg z-[100] ease-in duration-300 ' +
            navColor
          : 'fixed w-full h-20 z-[100] ease-in duration-200 ' + navColor
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/#home' scroll={false}>
          <Image
            src='/../public/assets/logoH2.png'
            alt='logo'
            width={50}
            height={50}
          />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/#home' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b text-[#999999]'>
                {t('navbar.home')}
              </li>
            </Link>
            <Link href='/#about' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b text-[#999999]'>
                {t('navbar.about')}
              </li>
            </Link>
            <Link href='/#skills' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b text-[#999999]'>
                {t('navbar.skills')}
              </li>
            </Link>
            <Link href='/#projects' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b text-[#999999]'>
                {t('navbar.projects')}
              </li>
            </Link>
            <Link href='/#contact' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b text-[#999999]'>
                {t('navbar.contact')}
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden text-[#999999]'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'fixed md:hidden left-0 top-0 w-full h-full bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/#home' scroll={false}>
                <Image
                  src='/../public/assets/logoH2.png'
                  width={60}
                  height={35}
                  alt='logo'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-md p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/#home' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact' scroll={false}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let's connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
