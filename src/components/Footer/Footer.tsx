import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialMediaIcons from './SocialMediaIcons';
import MailLink from '../MailLink/MailLink';
const Footer = () => {
  return (
    <div className='px-5 bg-[rgb(244,244,244)] w-full flex items-center justify-center'>
      <div>
        <footer className='mt-4 container mx-auto '>
          <div className='flex mx-auto  flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32 justify-center items-center px-8 py-16'>
            <div className=' flex flex-col gap-4 items-center  text-center lg:text-start lg:items-start '>
              <Image
                className='my-4'
                width={250}
                height={100}
                src='/bioprof-logo.png'
                alt='logo'
              />

              <div className='overflow-clip self-center'>
                Sinoz cilt bakım ürünlerimizi; doğanın zengin özleri ve
                teknoloji ile birleştirerek, farklı cilt tiplerinin
                ihtiyaçlarına uygun olarak üretip, müşterilerimize sunmaktayız.
              </div>
              <SocialMediaIcons />
            </div>
            <div className=' text-center lg:text-start flex flex-col gap-1'>
              <div className='text-2xl my-4'>İletişim</div>
              <Link
                href='/contact'
                className='hover:underline hover:text-gray-w'
              >
                Vadi İstanbul Ayazağa Mah. Azerbaycan Cad. 2B Ofis Kat:8 |
                Sarıyer/ İstanbul
              </Link>
              <MailLink />
              <Link
                className='hover:underline hover:text-gray-400'
                href='/about'
              >
                Hakkımızda
              </Link>
              <Link
                className='hover:underline hover:text-gray-400'
                href='/contact'
              >
                İletişim
              </Link>
              <Link
                className='hover:underline hover:text-gray-400'
                href='/blog'
              >
                Blog
              </Link>
            </div>
          </div>
        </footer>
        <div className='text-center self-center w-screen mx-auto py-8 px-5 bg-black  text-gray-400 text-md lg:ml-0 '>
          {new Date().getFullYear()} © bioprof.com · Tüm hakları saklıdır.
        </div>
      </div>
    </div>
  );
};

export default Footer;
