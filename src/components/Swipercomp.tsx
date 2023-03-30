import products from "../util/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
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
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-screen"
        breakpoints={breakpoints}
      >
        {products.map((img, index) => (
          <SwiperSlide className="mb-8" key={index}>
            <Link
              href={"/products/" + String(img.id)}
              className="flex flex-col items-center justify-center"
            >
              <img className="w-36 sm:w-48" src={img.url} alt="Image 1" />
              <p>{img?.description}</p>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </>
  );
};

export default Swipercomp;
