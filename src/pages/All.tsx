import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Product from "../components/Product/Product";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
const products = [
  {
    url: "https://www.sinoz.com.tr/wp-content/uploads/2023/02/yuz-temizleme-jeli-yeni-ambalaj.jpg",

    title: "Sinoz Yağlı ve Karma Ciltler İçin Yüz Temizleme Jeli",
  },
  {
    url: "https://www.sinoz.com.tr/wp-content/uploads/2022/02/koruyucu-sut.jpg",

    title:
      "Sinoz Ultra Yüksek Koruyucu & Nemlendirici Sprey Güneş Kremi SPF50+",
  },
  {
    url: "https://www.sinoz.com.tr/wp-content/uploads/2022/02/bronzlastirici-yag.jpg",
    title: "Sinoz Kusursuz Bronzlaştırıcı Güneş Yağı Spreyi",
  },
  {
    url: "https://www.sinoz.com.tr/wp-content/uploads/2022/02/bronzluk-jeli.jpg",
    title: "Sinoz Yoğun Bronzlaştırıcı Jel",
  },
];

const Page = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumb></BreadCrumb>
      <div className=" w-full  container md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-12 mx-auto grid lg:grid-cols-4 ">
        {products.map((product, i) => (
          <Product key={i} url={product.url} title={product.title} />
        ))}
      </div>
    </div>
  );
};
export default Page;
