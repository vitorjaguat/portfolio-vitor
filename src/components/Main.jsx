import { AiOutlineMail } from 'react-icons/ai';
// import { BsFillPersonFill } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { useParallax } from 'react-scroll-parallax';
import { useTranslation } from 'next-i18next';
import LanguageToggle from './LanguageToggle';
import { motion } from 'framer-motion';

const pathVariants = {
  hidden: {
    pathLength: 0,
    pathSpacing: 0,
  },
  visible: {
    pathLength: 1,

    pathSpacing: 0.2,
    transition: {
      duration: 9,
      // pathSpacing: 0.001,
    },
  },
};

export default function Main(props) {
  // const bgParallax = useParallax({
  //   easing: 'easeIn',
  //   // speed: 10,
  //   // rootMargin: { bottom: 50, left: 0, right: 0, top: 700 },
  // });
  const { t } = useTranslation('common');

  return (
    <div className='overflow-hidden'>
      <div id='home' className='w-full h-screen text-center overflow-hidden'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>
              {t('home.title')}
            </p>
            <h1 className='py-4 text-orange-900 text-5xl'>
              {t('home.hi')}
              {/* <span className='text-primary'>{t('home.name')}</span> */}
            </h1>
            <h1 className='py-2 text-gray-600 text-3xl'>
              {t('home.subtitle')}
            </h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
              {t('home.text')}
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <div className='rounded-full shadow-lg p-4 cursor-pointer hover:border-2 hover:border-dashed hover:border-orange-800 hover:scale-110 ease-in duration-500'>
                <FaGithub size={18} />
              </div>
              <div className='rounded-full shadow-lg p-4 cursor-pointer hover:border-2 hover:border-dashed hover:border-orange-800 hover:scale-110 ease-in duration-500'>
                <FaInstagram size={18} />
              </div>
              <div className='rounded-full shadow-lg p-4 cursor-pointer hover:border-2 hover:border-dashed hover:border-orange-800 hover:scale-110 ease-in duration-500'>
                <FaTelegramPlane size={18} />
              </div>
              <div className='rounded-full shadow-lg p-4 cursor-pointer hover:border-2 hover:border-dashed hover:border-orange-800 hover:scale-110 ease-in duration-500'>
                <AiOutlineMail size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-[10%] w-screen overflow-hidden object-cover'>
          <svg
            // height='100%'
            className='w-[1000px] md:w-screen overflow-hidden '
            // className='w-screen mt-[100px]'
            stroke-miterlimit='10'
            style={{
              fillRule: 'nonzero',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }}
            viewBox='0 0 3000 200'
            width='100%'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g>
              <path
                // variants={pathVariants}
                // initial='hidden'
                // animate='visible'
                // pathSpacing='0.5'
                d='M-41.0685 149.049C-22.7739 149.049-2.84712 144.448 15.5741 147.518C27.3531 149.481 38.3035 157.252 50.7843 155.172C62.3004 153.253 73.1127 148.257 84.4636 145.987C106.144 141.651 121.606 115.595 145.699 110.777C173.843 105.148 198.285 121.244 223.774 127.616C239.503 131.549 265.944 132.348 281.947 129.147C292.734 126.99 310.635 127.816 320.219 123.024C331.38 117.443 338.931 106.354 350.837 101.592C366.083 95.4928 383.936 94.8476 399.825 90.8753C411.72 87.9016 418.065 95.403 427.381 100.061C443.295 108.018 466.236 119.233 485.554 115.369C501.845 112.111 518.583 111.705 534.542 107.715C560.298 101.276 584.574 90.7013 611.086 86.2827C633.914 82.4781 651.496 94.3647 672.321 98.5297C699.662 103.998 727.129 108.267 754.989 113.839C803.102 123.461 848.932 95.7107 892.768 84.7518C927.363 76.1029 962.524 95.3019 993.806 103.122C1007.1 106.446 1020.45 109.018 1033.61 112.308C1063.07 119.674 1082.4 96.7757 1108.62 92.4062C1129.59 88.9116 1150.45 101.333 1169.86 106.184C1177.38 108.064 1188.12 106.184 1195.88 106.184C1219.5 106.184 1244.9 103.893 1267.83 107.715C1290.38 111.472 1312.99 115.521 1335.19 119.962C1358.46 124.616 1389.41 118.304 1411.74 113.839C1425.34 111.119 1439.52 111.955 1453.07 109.246C1460.89 107.681 1468.28 103.143 1476.03 101.592C1483.39 100.12 1491.64 103.064 1499 101.592C1525.4 96.3116 1551.64 89.2447 1578.6 84.7518C1597.61 81.5831 1625.84 82.5646 1644.43 86.2827C1655.33 88.4637 1665.27 93.5827 1676.58 95.468C1710.32 101.092 1745.75 96.4432 1779.15 103.122C1808.92 109.077 1839.35 108.818 1869.47 113.839C1889.61 117.195 1909.41 122.133 1929.17 126.086C1975.82 135.416 2043.64 132.561 2079.2 96.9989C2085.96 90.24 2082.12 76.2553 2083.79 67.9122C2084.78 62.9854 2086.41 58.0399 2085.32 52.6034C2081.59 33.9516 2025.52 31.2475 2013.37 40.3563C1981.51 64.2524 1998.26 113.223 2025.62 133.74C2032.96 139.248 2047.52 142.713 2056.24 144.456C2079.56 149.121 2132.9 150.167 2155.74 144.456C2164.93 142.159 2173.37 133.889 2181.77 132.209C2201.48 128.267 2220.74 118.64 2239.94 113.839C2249.92 111.345 2258.47 103.043 2267.5 98.5297C2283.14 90.7099 2298.44 86.5232 2314.95 83.221C2324.77 81.2579 2337.12 83.221 2347.1 83.221C2376.91 83.221 2404.63 83.7032 2432.83 89.3445C2463.51 95.4794 2494.25 98.5655 2524.68 104.653C2538.76 107.469 2551.99 115.625 2566.02 118.431C2589.54 123.136 2612.59 126.703 2636.44 130.678C2665.54 135.529 2694.9 128.477 2722.17 123.024C2732.79 120.9 2742.34 112.866 2752.79 110.777C2771.77 106.98 2790.7 105.337 2809.43 101.592C2828.98 97.6804 2846.48 86.4854 2866.07 83.221C2892.01 78.8983 2925.86 77.3663 2951.8 81.6901C2983.27 86.9358 3013.32 99.0859 3046.71 92.4062C3066.47 88.4555 3098.83 86.0714 3106.42 63.3195'
                fill='none'
                opacity='1'
                stroke='#242424'
                stroke-dasharray='12.0,0.0,22.0,30.0'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='6'
              />
            </g>
          </svg>
        </div>
      </div>

      <div
        // ref={bgParallax.ref}
        className='z-[-10] absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-400 to-orange-100'
      />
    </div>
  );
}
