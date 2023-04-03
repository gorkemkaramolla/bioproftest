import React from 'react';
import { Avatar } from '@mui/material';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from 'react-icons/fa';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import Link from 'next/link';
import { footerData } from '@/util/footer/footer';
type Props = {};

const SocialMediaIcons = (props: Props) => {
  return (
    <div className='flex gap-3 py-4'>
      {footerData.facebook !== '' && (
        <Link href={footerData.facebook}>
          <Avatar sx={{ bgcolor: '#4267B2' }}>
            <FaFacebookF />
          </Avatar>
        </Link>
      )}
      {footerData.twitter !== '' && (
        <Link href={footerData.twitter}>
          <Avatar sx={{ bgcolor: '#1DA1F2' }}>
            <FaTwitter />
          </Avatar>
        </Link>
      )}
      {footerData.instagram !== '' && (
        <Link href={footerData.instagram}>
          <Avatar
            sx={{
              WebkitTextFillColor: 'transparent',
              background:
                'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
            }}
          >
            <BsInstagram />
          </Avatar>
        </Link>
      )}
      {footerData.linkedin !== '' && (
        <Link href={footerData.linkedin}>
          <Avatar sx={{ bgcolor: '#0072b1' }}>
            <FaLinkedinIn />
          </Avatar>
        </Link>
      )}
      {footerData.pinterest !== '' && (
        <Link href={footerData.pinterest}>
          <Avatar sx={{ bgcolor: '#c8232c' }}>
            <FaPinterestP />
          </Avatar>
        </Link>
      )}
      {footerData.youtube !== '' && (
        <Link href={footerData.youtube}>
          <Avatar sx={{ color: '#FF0000', bgcolor: 'white' }}>
            <BsYoutube />
          </Avatar>
        </Link>
      )}
    </div>
  );
};

export default SocialMediaIcons;
