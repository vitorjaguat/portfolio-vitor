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
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const { t } = useTranslation('common');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showCaptcha, setShowCaptcha] = useState(false);

  //send e-mail:
  const form = useRef();
  const refCaptcha = useRef();
  const sendEmail = (captchaValue) => {
    // const params = {
    //   name,
    //   phone,
    //   email,
    //   subject,
    //   message,
    //   'g-recaptcha-response': captchaValue,
    // };
    // console.log(form.current);
    emailjs
      .send(
        'service_jh4yfos',
        'template_9aw8slr',
        {
          from_name: name,
          from_phone: phone,
          reply_to: email,
          subject,
          message,
          'g-recaptcha-response': captchaValue,
        },
        'Z_jK-N7VEgX46nN8P',
        'g-recaptcha-response'
      )
      .then(
        (result) => {
          console.log(result.text);
          setName('');
          setPhone('');
          setEmail('');
          setSubject('');
          setMessage('');
          setShowCaptcha(false);
          alert(t('contact.success-message'));
        },
        (error) => {
          console.log(error.text);
          setShowCaptcha(false);
          alert(t('contact.error-message'));
        }
      );
  };

  return (
    <div
      id='contact'
      className='w-full h-full  bg-gradient-to-b to-transparent from-orange-100 dark:from-zinc-600 dark:to-zinc-800 dark:text-zinc-200'
    >
      <div className='max-w-[1240px] m-auto px-2 py-20 w-full'>
        <p className='text-2xl text-right font-bold tracking-[10px] uppercase text-orange-900 dark:text-orange-300 pb-12'>
          {t('contact.title')}
        </p>
        {/* <h2 className='py-4'>{t('contact.subtitle')}</h2> */}
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-black/50 rounded-xl p-4'>
            <div className='lg:p-4 h-full flex flex-col justify-between'>
              <div>
                <Image className='rounded-xl' src={contactImg} alt='contact' />
              </div>
              <div className='pt-6 text-center'>
                <h2 className='py-2 dark:text-orange-300'>
                  {t('contact.name')}
                </h2>
                <p className='dark:text-zinc-400'>{t('contact.position')}</p>
                <p className='py-4'>{t('contact.text')}</p>
              </div>
              <div>
                <p className='uppercase pt-8 text-center dark:text-zinc-400'>
                  {t('contact.connect')}
                </p>
                <div className='flex items-center justify-around pb-4'>
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
          <div className='col-span-3 w-full h-auto shadow-md shadow-black/50 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                ref={form}
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowCaptcha(true);
                }}
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label
                      className='uppercase text-sm py-2'
                      htmlFor='from_name'
                    >
                      {t('contact.label-name')}
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-zinc-600 dark:bg-zinc-800'
                      type='text'
                      name='from_name'
                      id='from_name'
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label
                      className='uppercase text-sm py-2'
                      htmlFor='from_phone'
                    >
                      {t('contact.label-phone')}
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-zinc-600 dark:bg-zinc-800'
                      type='text'
                      name='from_phone'
                      id='from_phone'
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor='reply_to'>
                    {t('contact.label-email')}
                  </label>
                  <input
                    type='email'
                    name='reply_to'
                    id='reply_to'
                    className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-zinc-600 dark:bg-zinc-800'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor='subject'>
                    {t('contact.label-subject')}
                  </label>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    className='border-2 rounded-lg p-3 flex border-gray-300 dark:border-zinc-600 dark:bg-zinc-800'
                    required
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor='message'>
                    {t('contact.label-message')}
                  </label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 dark:border-zinc-600 dark:bg-zinc-800'
                    rows='10'
                    name='message'
                    id='message'
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>

                {!showCaptcha ? (
                  <button className='w-full p-4 text-gray-100 mt-4'>
                    {t('contact.button')}
                  </button>
                ) : (
                  <ReCAPTCHA
                    sitekey='6LfEN-UlAAAAACq29Rcdp7A2H8653ouyOjP5-ykJ'
                    onChange={sendEmail}
                  />
                )}
              </form>
            </div>

            {/* {showCaptcha && (
              <ReCAPTCHA
                sitekey='6LfEN-UlAAAAACq29Rcdp7A2H8653ouyOjP5-ykJ'
                onChange={sendEmail}
              />
            )} */}
          </div>
        </div>
        <div className='flex justify-center pb-5 mt-[200px]'>
          <Link href='/#home' scroll={false}>
            <div className='rounded-full p-6 cursor-pointer hover:scale-125 ease-in duration-200'>
              <HiOutlineChevronDoubleUp className='text-primary' size={25} />
            </div>
          </Link>
        </div>
      </div>
      {/* <div
        className={`${
          showCaptcha ? 'block' : 'hidden'
        } w-screen h-screen flex justify-center items-center`}
      >
        <form ref={refCaptcha} action='?' method='POST'>
          <div
            class='g-recaptcha'
            data-sitekey='6LfEN-UlAAAAACq29Rcdp7A2H8653ouyOjP5-ykJ'
          ></div>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div> */}
    </div>
  );
}
