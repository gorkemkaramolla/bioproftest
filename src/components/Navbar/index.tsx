import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import NavDrawer from './NavDrawer';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div
      className='fixed top-0 flex py-2 px-4 space-x-4 justify-between lg:justify-around 
    items-center border-b shadow-sm w-full z-50 backdrop-blur-sm bg-white bg-opacity-[0.85]'
    >
      <div className='inline-flex lg:hidden'>
        <NavDrawer />
      </div>
      <Link href='/'>
        <Image
          width={100}
          height={40}
          className='h-10 '
          src='/bioprof-logo.png'
          alt='logo'
        />
      </Link>

      <div className='hidden lg:flex space-x-2 lg:space-x-4'>
        <NavLink />
      </div>
      <div className='h-10 w-10'></div>
    </div>
  );
};

export default Navbar;
