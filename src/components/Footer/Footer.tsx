import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialMediaIcons from './SocialMediaIcons';
import MailLink from '../MailLink/MailLink';
const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='flex mx-auto  flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32 justify-center items-center bg-[rgb(244,244,244)] px-8 py-16'>
        <div className='max-w-[30rem] flex flex-col gap-4 items-center  text-center md:text-start md:items-start '>
          <Image
            width={120}
            height={45}
            className='h-16 w-40'
            src='/bioprof-logo.png'
            alt='logo'
          />

          <div className='overflow-clip'>
            Sinoz cilt bakım ürünlerimizi; doğanın zengin özleri ve teknoloji
            ile birleştirerek, farklı cilt tiplerinin ihtiyaçlarına uygun olarak
            üretip, müşterilerimize sunmaktayız.
          </div>
          <SocialMediaIcons />
        </div>
        <div className='max-w-[30rem] text-center md:text-start flex flex-col gap-1'>
          <div className='text-2xl'>İletişim</div>
          <Link href='/contact' className='text-blue-400 hover:text-orange-400'>
            Vadi İstanbul Ayazağa Mah. Azerbaycan Cad. 2B Ofis Kat:8 | Sarıyer/
            İstanbul
          </Link>
          <MailLink />
          <Link className='text-blue-400 hover:text-orange-400' href='/about'>
            Hakkımızda
          </Link>
          <Link className='text-blue-400 hover:text-orange-400' href='/contact'>
            İletişim
          </Link>
          <Link className='text-blue-400 hover:text-orange-400' href=''>
            Blog
          </Link>
        </div>
      </div>
      <div className='text-center  mx-auto py-8 bg-black  text-gray-400 text-md lg:ml-0 '>
        {new Date().getFullYear()} © bioprof.com · Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
