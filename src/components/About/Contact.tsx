import React from 'react';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import MailLink from '@/components/MailLink/MailLink';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import MessageForm from '../Form';
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
        <div className='grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 items-start container mx-auto gap-8 mb-8 p-8'>
          <MessageForm />
          <div className='text-start text-black'>
            <div className='space-y-4'>
              <h1 className='text-2xl font-bold'>Bizimle İletişime Geç</h1>
              <h2 className='text-xl'>Bioprof Kozmetik</h2>

              <hr className='border-black mx-auto' />
              <p className='text-xs font-bold'>ADRES</p>
              <p className='text-sm text-gray-500 '>
                Vadi İstanbul Ayazağa Mah. Azerbaycan Cad. 2B Ofis Kat:8 |
                Sarıyer/İstanbul
              </p>
              <p className='text-xs font-bold pb-4'>EMAİL</p>
              <MailLink />
            </div>
          </div>
        </div>

        <div className='w-full mb-6'>
          <div className=''>
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
