import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./BannerSwiper.module.css";
import "swiper/css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
type Props = {};

SwiperCore.use([Autoplay, Navigation, Pagination]);

const BannerSwiper = (props: Props) => {
  useEffect(() => {}, []);
  return (
    <>
      <Swiper
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-screen"
      >
        <SwiperSlide className="">
          <Link href="#">
            <img
              className="w-screen object-cover"
              src="head-banner/glow-des.jpg"
              alt="Image 1"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <img
              className="w-screen"
              src="head-banner/gunes-kremleri-desktop-slider-2.jpg"
              alt="Image 1"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <img
              className="w-screen"
              src="head-banner/pink-touch-slider-desktop.jpg"
              alt="Image 1"
            />
          </Link>
        </SwiperSlide>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="swiper-pagination"></div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </>
  );
};

export default BannerSwiper;
