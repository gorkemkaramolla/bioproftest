import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../BannerSwiper.module.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { brandData } from "@/util/brandBanner";
SwiperCore.use([Autoplay, Navigation, Pagination]);
import Link from "next/link";
import Image from "next/image";
type Props = {};

const BrandSwiper = (props: Props) => {
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
  useEffect(() => {}, []);
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
        spaceBetween={0}
        modules={[Pagination, Navigation]}
        breakpoints={breakpoints}
        className="flex justify-center col-span-12 w-full"
      >
        {brandData.map((imgSrc, i) => (
          <SwiperSlide className="flex items-cent justify-center" key={i}>
            <Link
              href={"/"}
              className="flex flex-col items-center justify-center"
            >
              <img alt="" src={`brand-banner/${imgSrc}`}></img>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BrandSwiper;
