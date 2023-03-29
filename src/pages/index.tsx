import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { register } from "swiper/element/bundle";
const inter = Inter({ subsets: ["latin"] });

import products from "@/util/products";

// Import Swiper styles
import "swiper/css";
import Swipercomp from "@/components/Swipercomp";
import BannerSwiper from "@/components/HeadBanner/BannerSwiper";
import { datasquares } from "@/util/squareboardsdata";
import SquareBoard from "@/components/squareboards/SquareBoard";
import Banner from "@/components/regular-banner/Banner";
import Video from "@/components/Video/Video";
import BrandSwiper from "@/components/BrandSwiper/BrandSwiper";
import SocialMediaSquare from "../components/SocialMediaSquares/SocialMediaSquare";
export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div
          style={{ width: "90vw" }}
          className=" container grid  row-span-1 grid-cols-12 "
        >
          <div className="container col-span-12 ">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
        <div className="container   w-screen px-5 py-2   ">
          <Video />
        </div>
        <div className="px-5 py-2 container w-screen row-span-1 grid grid-cols-12">
          <Banner imgSrc="desktop-mucize-banner.jpg" />
        </div>

        <div className="container grid w-screen px-3 py-2 row-span-1 grid-cols-12 ">
          {datasquares.map((square, idx) => (
            <div
              className="col-span-6 xl:col-span-3 lg:col-span-3 md:col-span-3  sm:col-span-6 gap-5 mb-5"
              key={idx}
            >
              <SquareBoard imgSrc={`squareboards/${square}`} />
            </div>
          ))}
        </div>
        <div className=" container justify-center  w-screen  py-2 px-5   grid grid-cols-12">
          <Banner imgSrc="desktop-serumlar-banner.jpeg" />
        </div>
        <div className=" container justify-center  w-screen  py-2 px-5   grid grid-cols-12">
          <BrandSwiper></BrandSwiper>
        </div>

        <div className="container px-5  py-2 w-screen ">
          <Video />
        </div>
        <div className="flex w-screen px-5 py-2 container">
          {products.map((product) => (
            <SocialMediaSquare key={product.id} imgSrc={product.url} />
          ))}
        </div>
      </main>
    </div>
  );
}
