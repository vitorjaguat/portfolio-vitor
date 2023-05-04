import blogImg from '../../public/assets/projects/blog.png';
import donadaImg from '../../public/assets/projects/donada.jpg';
import hanziImg from '../../public/assets/projects/hanzi.png';
import moreabstractImg from '../../public/assets/projects/moreabstract.png';
import cryptoImg from '../../public/assets/projects/crypto.jpeg';
import twitchImg from '../../public/assets/projects/twitch.jpeg';
import netflixImg from '../../public/assets/projects/netflix.jpeg';
import ProjectItem from './ProjectItem';
import { useTranslation } from 'next-i18next';

export default function Projects() {
  const { t } = useTranslation('common');

  return (
    <div
      id='projects'
      className='w-full bg-gradient-to-b from-orange-100 to-transparent'
    >
      <div className='max-w-[1240px] mx-auto px-2 py-20'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          {t('projects.title')}
        </p>
        <p></p>
        <h2 className='py-4'> {t('projects.subtitle')}</h2>
        <div className='pt-8 flex flex-col gap-8'>
          <ProjectItem
            title={t('projects.blog.title')}
            backgroundImg={blogImg}
            projectUrl='/projects/blog'
            text={t('projects.blog.text')}
          />
          <ProjectItem
            title={t('projects.donada.title')}
            backgroundImg={donadaImg}
            projectUrl='/projects/donada'
            text={t('projects.donada.text')}
          />
          <ProjectItem
            title={t('projects.hanzi.title')}
            backgroundImg={hanziImg}
            projectUrl='/projects/hanzi'
            text={t('projects.hanzi.text')}
          />
          <ProjectItem
            title={t('projects.moreabstract.title')}
            backgroundImg={moreabstractImg}
            projectUrl='/projects/moreabstract'
            text={t('projects.moreabstract.text')}
          />

          {/* <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
          /> */}
          {/* <ProjectItem
            title='Twitch Clone'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
          />
          <ProjectItem
            title='Netflix Clone'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
          /> */}
        </div>
      </div>
    </div>
  );
}
