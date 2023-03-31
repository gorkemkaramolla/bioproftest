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
        {products.map((product, index) => (
          <SwiperSlide className="mb-8 group transition-all" key={product.id}>
            <Link
              href={"/products/" + product.name}
              className="flex flex-col items-center justify-center"
            >
              <img className="w-36 sm:w-48" src={product.url} alt="Image 1" />
              <hr className="border border-green-600 w-full rounded-xl my-4 transition-colors duration-200" />
              <p className="text-sm group-hover:text-green-400  flex justify-start text-left w-full transition-colors duration-200">
                {product.caption.length > 55
                  ? product.caption.slice(0, 55) + "..."
                  : product.caption}
              </p>
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
