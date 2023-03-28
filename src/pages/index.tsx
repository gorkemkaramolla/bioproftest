import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css';
import { register } from 'swiper/element/bundle';
const inter = Inter({ subsets: ['latin'] });
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '@/components/Navbar';
// Import Swiper styles
import 'swiper/css';
import Swipercomp from '@/components/Swipercomp';
import BannerSwiper from '@/components/BannerSwiper';
import { datasquares } from '@/util/squareboardsdata';
import SquareBoard from '@/components/squareboards/SquareBoard';
import Banner from '@/components/regular-banner/Banner';
import Video from '@/components/Video/Video';
export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div
          style={{ width: '90vw' }}
          className=' container grid  row-span-1 grid-cols-12 '
        >
          <div className='container col-span-12 '>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <BannerSwiper />
            </div>
            <Swipercomp />
          </div>
          {/* <div className="container mx-auto gap-8  grid-rows-1 grid grid-cols-12">
          <Banner />
        </div> */}
        </div>
        <div className='container   w-screen p-5    '>
          <Video />
        </div>

        <div className='container grid w-screen p-3 row-span-1 grid-cols-12 '>
          {datasquares.map((square, idx) => (
            <div
              className='col-span-6 xl:col-span-3 lg:col-span-3 md:col-span-3  sm:col-span-6 gap-5 mb-5'
              key={idx}
            >
              <SquareBoard imgSrc={`squareboards/${square}`} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
