import React from 'react';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import MailLink from '@/components/MailLink/MailLink';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
type Props = {};

const Contact = (props: Props) => {
  const fadeAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      duration: 1000,
    },
  });
  return (
    <animated.div style={fadeAnim}>
      <div>
        <BreadCrumb regularCategoryName='contact' />
        <div className='container mx-auto grid grid-cols-12 mb-5 text-center '>
          <div className='col-span-12 '>
            <div className='mx-auto pb-12 pt-3 flex justify-center'>
              <Image width={300} height={200} src='/bioprof-logo.png' alt='' />
            </div>
            <h1 className='text-2xl text-black py-1 font-bold'>
              Bizimle İletişime Geç
            </h1>
            <h2 className='text-2xl text-black py-1'></h2>
            <hr className=' border-black py-1 md:w-[40%] w-[70%] mx-auto' />
            <p className='text-black text-sm font-bold py-1'>ADRES</p>
            <p className='text-sm text-gray-500 py-1 px-12'>
              Vadi İstanbul Ayazağa Mah. Azerbaycan Cad. 2B Ofis Kat:8 |
              Sarıyer/İstanbul
            </p>
            <p className='text-black text-sm font-bold py-1 '>EMAİL</p>
            <MailLink />
          </div>
        </div>

        <div className='w-screen container grid grid-cols-12 mx-auto mb-6'>
          <div className='col-span-12'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25421.2477802826!2d33.29651!3d37.2084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d9ed2392552811%3A0x4b8cf5d104754c0d!2zS2FyYW1hbiDEsMWfIEdlbGnFn3Rpcm1l!5e0!3m2!1str!2str!4v1680367688634!5m2!1str!2str'
              width='100%'
              height='600px'
              style={{
                border: 0,
              }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Contact;
