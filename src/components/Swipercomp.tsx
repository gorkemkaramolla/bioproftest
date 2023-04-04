import products from '../util/ürünler/products';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { A11y, Pagination, Scrollbar } from 'swiper';
import { Navigation } from 'swiper';
type Props = {};

const breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
};
const Swipercomp = (props: Props) => {
  return (
    <>
      <Swiper
        rewind
        autoplay={{ delay: 2000 }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        slidesPerView={2}
        modules={[Pagination]}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className='mySwiper w-screen'
        breakpoints={breakpoints}
      >
        {products.map((product, index) => (
          <SwiperSlide className='mb-8 group transition-all' key={product.id}>
            <Link
              href={'/products/' + product.name}
              className='flex flex-col items-center justify-center'
            >
              <img
                className='w-36 sm:w-48 h-36 sm:h-48 object-contain'
                src={product.url}
                alt='Image 1'
              />
              <hr className='border border-green-600 w-full rounded-xl my-2 transition-colors duration-200' />
              <p className='text-sm group-hover:text-green-400  flex justify-start text-left w-full transition-colors duration-200'>
                {product.caption.length > 55
                  ? product.caption.slice(0, 55) + '...'
                  : product.caption}
              </p>
            </Link>
          </SwiperSlide>
        ))}
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </Swiper>
    </>
  );
};

export default Swipercomp;
