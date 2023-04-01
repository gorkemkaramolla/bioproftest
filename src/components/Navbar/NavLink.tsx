// import { Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Button } from '@nextui-org/react';
import categorires from '@/util/categories';
import { useRouter } from 'next/router';
import { firstCharacterUpper } from '@/util/utilfunctions';
const NavLink = () => {
  const router = useRouter();

  return (
    <div className='capitalize m-2'>
      {categorires.map((category, i) => {
        if (category.name === 'Tüm Ürünler') {
          return (
            <Link
              key={i}
              title={category.name}
              href={'/products/'}
              className={`text-xs lg:text-base capitalize  ${
                router.asPath === `/products` ? 'text-green-500' : ''
              } `}
            >
              <span className='hover:text-green-500 capitalize '>
                {category.name}
              </span>
            </Link>
          );
        } else
          return (
            <Link
              key={i}
              title={category.name}
              href={'/products/category/' + category.endpoint}
              className={`text-xs lg:text-base pr-8 capitalize 
              ${
                router.asPath === `/products/category/${category.endpoint}`
                  ? 'text-green-500'
                  : ''
              }`}
            >
              <span className='hover:text-green-500 capitalize transition-colors'>
                {category.name}
              </span>
            </Link>
          );
      })}
    </div>
  );
};

export default NavLink;
