import React from 'react';
import Link from 'next/link';
import { Avatar } from '@nextui-org/react';
const Footer = () => {
  return (
    <footer className='mt-8'>
      <div className='flex flex-col lg:flex-row gap-8 justify-around items-center bg-[rgb(244,244,244)] px-8 py-16'>
        <div className='w-1/2 flex flex-col gap-4 items-center  text-center md:text-start md:items-start '>
          <img
            className='h-16 w-40'
            src='BİOPROF site dosyalar/Logo/Bioprof logo.png'
            alt='logo'
          />

          <div className='overflow-clip'>
            Sinoz cilt bakım ürünlerimizi; doğanın zengin özleri ve teknoloji
            ile birleştirerek, farklı cilt tiplerinin ihtiyaçlarına uygun olarak
            üretip, müşterilerimize sunmaktayız.
          </div>
          <div className='flex gap-3 py-4'>
            <Avatar text='f' color={'secondary'} />
            <Avatar text='t' color={'primary'} />
            <Avatar text='i' color={'gradient'} />
            <Avatar text='p' color={'warning'} />
            <Avatar text='in' color={'default'} />
            <Avatar text='y' color={'error'} />
          </div>
        </div>
        <div className='w-1/2 text-center md:text-start flex flex-col gap-1'>
          <div className='text-2xl'>İletişim</div>
          <div>
            Vadi İstanbul Ayazağa Mah. Azerbaycan Cad. 2B Ofis Kat:8 | Sarıyer/
            İstanbul
          </div>
          <div>Mail: bilgi@bioprof.com</div>
          <div>Hakkımızda</div>
          <div>İletişim</div>
          <div>Blog</div>
        </div>
      </div>
      <div className='text-center  mx-auto py-4 bg-black  text-gray-500 lg:ml-0 '>
        {new Date().getFullYear()} © bioprof.com · Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
