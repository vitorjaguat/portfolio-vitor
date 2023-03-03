import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function ProjectItem({ title, backgroundImg, projectUrl }) {
  const { t } = useTranslation('common');

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2a2a2a] to-[#7d7d7d]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={backgroundImg}
        alt={title}
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        {/* Can pass 'skills' prop and map through it! */}
        <p className='pb-4 pt-2 text-white text-center'>React JS</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            {t('project-item.more')}mm
          </p>
        </Link>
      </div>
    </div>
  );
}
