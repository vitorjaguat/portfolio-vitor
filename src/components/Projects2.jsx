import blogImg from '../../public/assets/projects/blog.png';
import donadaImg from '../../public/assets/projects/donada.jpg';
import hanziImg from '../../public/assets/projects/hanzi.png';
import moreabstractImg from '../../public/assets/projects/moreabstract.png';
import squareImg from '../../public/assets/projects/square.png';
import cabanagem200Img from '../../public/assets/projects/cabanagem200.png';
import ProjectItem from './ProjectItem';
import { useTranslation } from 'next-i18next';

export default function Projects2() {
  const { t } = useTranslation('common');

  return (
    <>
      <div
        id='authorial'
        className='w-full bg-gradient-to-b from-orange-100 to-transparent dark:from-zinc-600 dark:to-zinc-600'
      >
        <div className='max-w-[1240px] mx-auto px-2 py-20'>
          <p className='text-2xl text-right font-bold tracking-[10px] uppercase text-orange-900 dark:text-orange-300  pb-12'>
            {t('projects.authorial.title')}
          </p>
          {/* <h2 className='py-4'> {t('projects.authorial.subtitle')}</h2> */}
          <div className='flex flex-col gap-8'>
            <ProjectItem
              title={t('projects.authorial.hanzi.title')}
              backgroundImg={hanziImg}
              projectUrl='/projects/hanzi'
              text={t('projects.authorial.hanzi.text')}
            />

            <ProjectItem
              title={t('projects.authorial.blog.title')}
              backgroundImg={blogImg}
              projectUrl='/projects/blog'
              text={t('projects.authorial.blog.text')}
            />

            <ProjectItem
              title={t('projects.authorial.square.title')}
              backgroundImg={squareImg}
              projectUrl='/projects/square'
              text={t('projects.authorial.square.text')}
            />
          </div>
        </div>
      </div>

      <div
        id='commissioned'
        className='w-full bg-gradient-to-b to-orange-100 from-transparent dark:from-zinc-600 dark:to-zinc-600'
      >
        <div className='max-w-[1240px] mx-auto px-2 py-20'>
          <p className='text-2xl text-right font-bold tracking-[10px] uppercase text-orange-900 dark:text-orange-300  pb-12'>
            {t('projects.commissioned.title')}
          </p>
          {/* <h2 className='py-4'> {t('projects.commissioned.subtitle')}</h2> */}
          <div className='flex flex-col gap-8'>
            <ProjectItem
              title={t('projects.commissioned.donada.title')}
              backgroundImg={donadaImg}
              projectUrl='/projects/donada'
              text={t('projects.commissioned.donada.text')}
            />

            <ProjectItem
              title={t('projects.commissioned.moreabstract.title')}
              backgroundImg={moreabstractImg}
              projectUrl='/projects/moreabstract'
              text={t('projects.commissioned.moreabstract.text')}
            />

            <ProjectItem
              title={t('projects.commissioned.cabanagem200.title')}
              backgroundImg={cabanagem200Img}
              projectUrl='/projects/cabanagem200'
              text={t('projects.commissioned.cabanagem200.text')}
            />
          </div>
        </div>
      </div>
    </>
  );
}
