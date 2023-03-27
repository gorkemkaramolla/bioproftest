"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./BannerSwipe.module.css";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

type Props = {};
SwiperCore.use([Autoplay]);

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
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className="">
          <a href="#">
            <img className=" w-screen" src="banner1.jpg" alt="Image 1" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img className=" w-screen  " src="banner2.jpg" alt="Image 1" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img className=" w-screen  " src="banner3.jpg" alt="Image 1" />
          </a>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </>
  );
};

export default BannerSwiper;
