import Navbar from './Navbar';
import Footer from './Footer';
import React, { ReactElement } from 'react';
import HeadComponent from './HeadComponent';
export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <HeadComponent />
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  );
}
