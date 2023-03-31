import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialMediaIcons from "./SocialMediaIcons";
const Footer = () => {
  return (
    <footer className="">
      <div className="flex mx-auto flex-col lg:flex-row gap-8 justify-center items-center bg-[rgb(244,244,244)] px-8 py-16">
        <div className="w-1/2 flex flex-col gap-4 items-center  text-center md:text-start md:items-start ">
          <Image
            width={120}
            height={45}
            className="h-16 w-40"
            src="/bioprof-logo.png"
            alt="logo"
          />

          <div className="overflow-clip">
            Sinoz cilt bakım ürünlerimizi; doğanın zengin özleri ve teknoloji
            ile birleştirerek, farklı cilt tiplerinin ihtiyaçlarına uygun olarak
            üretip, müşterilerimize sunmaktayız.
          </div>
          <SocialMediaIcons />
        </div>
        <div className="w-1/2 text-center md:text-start flex flex-col gap-1">
          <div className="text-2xl">İletişim</div>
          <Link href="/" className="text-blue-400 hover:text-orange-400">
            Vadi İstanbul Ayazağa Mah. Azerbaycan Cad. 2B Ofis Kat:8 | Sarıyer/
            İstanbul
          </Link>
          <Link className="text-blue-400 hover:text-orange-400" href="">
            Mail: bilgi@bioprof.com
          </Link>
          <Link className="text-blue-400 hover:text-orange-400" href="/about">
            Hakkımızda
          </Link>
          <Link className="text-blue-400 hover:text-orange-400" href="">
            İletişim
          </Link>
          <Link className="text-blue-400 hover:text-orange-400" href="">
            Blog
          </Link>
        </div>
      </div>
      <div className="text-center text-sm mx-auto py-4 bg-black  text-gray-500 lg:ml-0 ">
        {new Date().getFullYear()} © bioprof.com · Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
