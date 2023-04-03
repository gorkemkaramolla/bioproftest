import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ilkBanner } from '@/util/anasayfa/anasayfa';
import 'swiper/css';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
type Props = {};
import { EffectFade } from 'swiper';
SwiperCore.use([Autoplay, Navigation, Pagination]);

const BannerSwiper = (props: Props) => {
  useEffect(() => {}, []);
  return (
    <Swiper
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='mySwiper w-screen mb-4'
    >
      {ilkBanner.map((banner, index) => (
        <SwiperSlide className='' key={index}>
          <Link href='#'>
            <img className='w-screen object-cover' src={banner} alt='Image 1' />
          </Link>
        </SwiperSlide>
      ))}

      <div className='absolute bottom-0 left-0 w-full flex justify-center'>
        <div className='swiper-pagination'></div>
      </div>
      <div className='swiper-button-next'></div>
      <div className='swiper-button-prev'></div>
    </Swiper>
  );
};

export default BannerSwiper;
