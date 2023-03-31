import Navbar from './Navbar';
import Footer from './Footer/Footer';
import React, { ReactElement } from 'react';
import HeadComponent from './HeadComponent';
export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <HeadComponent />
      <Navbar />
      <main className='min-h-screen mt-[4rem] lg:mt-[4.75rem]'>{children}</main>
      <Footer />
    </>
  );
}
