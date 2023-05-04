import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import contactImg from '../../public/assets/contact.avif';

export default function Contact() {
  const { t } = useTranslation('common');

  //send e-mail:

  return (
    <div
      id='contact'
      className='w-full h-full  bg-gradient-to-b from-transparent to-orange-200'
    >
      <div className='max-w-[1240px] m-auto px-2 py-20 w-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          {t('contact.title')}
        </p>
        <h2 className='py-4'>{t('contact.subtitle')}</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full flex flex-col justify-between'>
              <div>
                <Image className='rounded-xl' src={contactImg} alt='contact' />
              </div>
              <div className='pt-6 text-center'>
                <h2 className='py-2'>{t('contact.name')}</h2>
                <p>{t('contact.position')}</p>
                <p className='py-4'>{t('contact.text')}</p>
              </div>
              <div>
                <p className='uppercase pt-8 text-center'>
                  {t('contact.connect')}
                </p>
                <div className='flex items-center justify-around py-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/vitorjaguat'
                  >
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href='https://www.instagram.com/mtc.cultura'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href='https://t.me/jaguat'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                      <FaTelegramPlane />
                    </div>
                  </a>
                  <a
                    href='https://wa.me/5511989417369'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                      <FaWhatsapp />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      {t('contact.label-name')}
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      {t('contact.label-phone')}
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>
                    {t('contact.label-email')}
                  </label>
                  <input
                    type='email'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>
                    {t('contact.label-subject')}
                  </label>
                  <input
                    type='text'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>
                    {t('contact.label-message')}
                  </label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                  />
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  {t('contact.button')}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center pb-5 mt-[200px]'>
          <Link href='/#home' scroll={false}>
            <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
              <HiOutlineChevronDoubleUp className='text-primary' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
