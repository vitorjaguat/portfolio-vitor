import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';
import { SiNextdotjs } from 'react-icons/si';
import { FaMarkdown } from 'react-icons/fa';
import { DiGit } from 'react-icons/di';

export default function Skills() {
  const { ref: ref1, inView: inView1 } = useInView({
    // triggerOnce: true,
    // rootMargin: '10%',
    // threshold: 1,
  });
  const { ref: ref2, inView: inView2 } = useInView({});
  const { ref: ref3, inView: inView3 } = useInView({});
  const { ref: ref4, inView: inView4 } = useInView({});
  const { ref: ref5, inView: inView5 } = useInView({});
  const { ref: ref6, inView: inView6 } = useInView({});
  const { ref: ref7, inView: inView7 } = useInView({});
  const { ref: ref8, inView: inView8 } = useInView({});
  const { ref: ref9, inView: inView9 } = useInView({});
  const { ref: ref10, inView: inView10 } = useInView({});
  const { ref: ref11, inView: inView11 } = useInView({});
  const { ref: ref12, inView: inView12 } = useInView({});
  const { ref: ref13, inView: inView13 } = useInView({});
  const { t } = useTranslation('common');

  return (
    <div
      id='skills'
      className='w-full p-2 py-20 bg-gradient-to-b from-transparent to-orange-100 overflow-hidden'
    >
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-2xl text-right font-bold tracking-[10px] uppercase text-orange-900 pb-12'>
          {t('skills.title')}
        </p>
        {/* <h2 className='py-4'>{t('skills.subtitle')}</h2> */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Can be refactored into a new component: */}

          <div
            ref={ref1}
            style={{
              transform: inView1 ? 'translateX(0)' : 'translateX(100%)',
              transition: 'all 1s',
            }}
            className='p-6 bg-black/5 shadow-md rounded-xl'
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
            ref={ref2}
            style={{
              transform: inView2 ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref3}
            style={{
              transform: inView3 ? 'translateX(0)' : 'translateX(100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref4}
            style={{
              transform: inView4 ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref5}
            style={{
              transform: inView5 ? 'translateX(0)' : 'translateX(100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref6}
            style={{
              transform: inView6 ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref7}
            style={{
              transform: inView7 ? 'translateX(0)' : 'translateX(100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref8}
            style={{
              transform: inView8 ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref9}
            style={{
              transform: inView9 ? 'translateX(0)' : 'translateX(100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref10}
            style={{
              transform: inView10 ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref11}
            style={{
              transform: inView11 ? 'translateX(0)' : 'translateX(100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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
            ref={ref12}
            style={{
              transform: inView12 ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
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

          <div
            ref={ref13}
            style={{
              transform: inView13 ? 'translateX(0)' : 'translateX(100%)',
              transition: 'all 1s',
            }}
            className='p-6 shadow-md rounded-xl bg-black/5'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img
                  alt='my skills'
                  src='/assets/skills/p5js.svg'
                  // width={64}
                  // height={64}
                  className='w-[60px] h-[60px]'
                />
                {/* <FaMarkdown color='#8f8f8f' size={64} /> */}
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>p5.js</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
