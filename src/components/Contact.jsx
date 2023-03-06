import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
} from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Contact() {
  const { t } = useTranslation('common');

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-20 w-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          {t('contact.title')}
        </p>
        <h2 className='py-4'>{t('contact.subtitle')}</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                  alt='contact'
                />
              </div>
              <div>
                <h2 className='py-2'>{t('contact.name')}</h2>
                <p>{t('contact.position')}</p>
                <p className='py-4'>{t('contact.text')}</p>
              </div>
              <div>
                <p className='uppercase pt-8 text-center'>
                  {t('contact.connect')}
                </p>
                <div className='flex items-center justify-around py-4'>
                  <a target='_blank' href='https://github.com/vitorjaguat'>
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href='https://www.instagram.com/mtc.cultura'
                    target='_blank'
                  >
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                      <FaInstagram />
                    </div>
                  </a>
                  <a href='https://t.me/jaguat' target='_blank'>
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                      <FaTelegramPlane />
                    </div>
                  </a>
                  <a href='mailto:vitorbutkus@gmail.com'>
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                      <AiOutlineMail />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
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
