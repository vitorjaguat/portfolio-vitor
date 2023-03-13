import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';
import { SiNextdotjs } from 'react-icons/si';
import { FaMarkdown } from 'react-icons/fa';
import { DiGit } from 'react-icons/di';

export default function Skills() {
  const { ref: ref1, inView: inView1 } = useInView({
    // triggerOnce: true,
    // rootMargin: '700px',
  });
  // const { ref: ref2, inView: inView2 } = useInView({
  //   triggerOnce: true,
  // });
  const { t } = useTranslation('common');

  return (
    <div
      id='skills'
      className='w-full p-2 py-20 bg-gradient-to-b from-transparent to-orange-100'
    >
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          {t('skills.title')}
        </p>
        <h2 className='py-4'>{t('skills.subtitle')}</h2>
        <div className='grid pt-6 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Can be refactored into a new component: */}
          <div
            ref={ref1}
            style={{
              transform: inView1 ? 'none' : 'translateX(-20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/assets/skills/html.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref1}
            style={{
              transform: inView1 ? 'none' : 'translateX(-20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/assets/skills/css.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/assets/skills/javascript.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <DiGit size={64} color='#f14e32' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/assets/skills/github1.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/assets/skills/react.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <SiNextdotjs size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next.JS</h3>
              </div>
            </div>
          </div>

          <div
            style={{
              transform: inView1 ? 'none' : 'translateX(-20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/assets/skills/firebase.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/assets/skills/mongo.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref1}
            style={{
              transform: inView1 ? 'none' : 'translateX(-20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/assets/skills/tailwind.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/assets/skills/node.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>

          <div
            // ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image
                  alt='my skills'
                  src='/../public/assets/skills/node.png'
                  width={64}
                  height={64}
                /> */}
                <FaMarkdown color='#8f8f8f' size={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Markdown</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
