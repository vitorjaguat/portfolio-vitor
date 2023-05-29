import Link from 'next/link';
import Image from 'next/image';
// import { useTranslation } from 'next-i18next';

export default function ProjectItem({
  title,
  backgroundImg,
  projectUrl,
  text,
}) {
  // const { t } = useTranslation('common');

  return (
    <div className='grid md:grid-cols-2 bg-black/5 dark:bg-white/5 p-2 md:p-4 rounded-lg'>
      <Link href={projectUrl}>
        <div className='h-[280px] md:col-span-1 relative rounded-lg p-4 md:p-2 overflow-hidden hover:border-orange-700 dark:hover:border-orange-300 hover:border-dashed hover:border-4 hover:opacity-80 hover:scale-95 duration-300'>
          <Image
            src={backgroundImg}
            alt={title}
            fill
            className='object-cover'
          />
        </div>
      </Link>

      <div className='md:col-span-1 px-4 md:px-8 py-4 md:py-2 flex flex-col justify-between dark:text-gray-200'>
        <div className=''>
          <p className='font-bold text-lg pb-6 dark:text-orange-300'>{title}</p>
          <p>{text}</p>
        </div>
        <Link href={projectUrl}>
          <p className='text-end text-orange-900 dark:text-orange-100 text-sm'>
            See more
          </p>
        </Link>
      </div>
    </div>

    // <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2a2a2a] to-[#7d7d7d]'>
    //   <Image
    //     className='rounded-xl group-hover:opacity-10'
    //     src={backgroundImg}
    //     alt={title}
    //   />
    //   <div className='hidden group-hover:block'>
    //     <h3 className='text-2xl text-white tracking-wider text-center'>
    //       {title}
    //     </h3>
    //     {/* Can pass 'skills' prop and map through it! */}
    //     <p className='pb-4 pt-2 text-white text-center'>React JS</p>
    //     <Link href={projectUrl}>
    //       <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
    //         {t('project-item.more')}
    //       </p>
    //     </Link>
    //   </div>
    // </div>
  );
}
