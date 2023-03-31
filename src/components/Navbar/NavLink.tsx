// import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Button } from '@nextui-org/react';
import categorires from '@/util/categories';
import { useRouter } from 'next/router';
import { firstCharacterUpper } from '@/util/utilfunctions';

const NavLink = () => {
  const router = useRouter();
  return (
    <div className='capitalize m-2'>
      {categorires.map((category, i) => {
        if (category === 'tüm ürünler') {
          return (
            <Link
              key={i}
              title={category}
              href={'/products/'}
              className={`text-xs lg:text-base capitalize  ${
                router.asPath === `/products` ? 'text-green-500 ' : ''
              } `}
            >
              <span className='hover:text-green-500 capitalize '>
                {firstCharacterUpper(category)}
              </span>
            </Link>
          );
        } else
          return (
            <Link
              key={i}
              title={category}
              href={'/products/category/' + category}
              className={`text-xs lg:text-base pr-8 capitalize ${
                router.asPath === `/products/category/${category}`
                  ? 'text-green-500'
                  : ''
              }`}
            >
              <span className='hover:text-green-500 capitalize transition-colors'>
                {firstCharacterUpper(category)}
              </span>
            </Link>
          );
      })}
    </div>
  );
};

export default NavLink;
