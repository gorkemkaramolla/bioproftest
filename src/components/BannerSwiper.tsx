import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./BannerSwiper.module.css";
import "swiper/css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
          bulletActiveClass: "banner-pagination-bullet-active",
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: function (index, className) {
            return `<span class="${className}  ${styles["swiper-pagination-bullet"]} "></span>`;
          },
        }}
      >
        <SwiperSlide className="">
          <a href="#">
            <img className="w-screen" src="banner1.jpg" alt="Image 1" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img className="w-screen" src="banner2.jpg" alt="Image 1" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img className="w-screen" src="banner3.jpg" alt="Image 1" />
          </a>
        </SwiperSlide>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="swiper-pagination"></div>
        </div>
        <button className="absolute top-1/2 z-100 left-0 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full text-white hover:bg-opacity-60 transition ease-in-out duration-150 focus:outline-none swiper-button-prev">
          <BsChevronLeft size={20} />
        </button>
        <button className="absolute top-1/2 z-50 right-0 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full text-white hover:bg-opacity-60 transition ease-in-out duration-150 focus:outline-none swiper-button-next">
          <BsChevronRight size={20} />
        </button>
      </Swiper>
    </>
  );
};

export default BannerSwiper;
