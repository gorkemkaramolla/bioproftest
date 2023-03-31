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
    <div className='pt-2'>
      {categorires.map((category, i) => {
        if (category === 'tüm ürünler') {
          return (
            <Link
              key={i}
              title={category}
              href={'/products/'}
              className={`text-xs lg:text-base ${
                router.asPath === `/products` ? 'text-green-500' : ''
              }`}
            >
              {firstCharacterUpper(category)}
            </Link>
          );
        } else
          return (
            <Link
              key={i}
              title={category}
              href={'/products/category/' + category}
              className={`text-xs lg:text-base pr-4 ${
                router.asPath === `/products/category/${category}`
                  ? 'text-green-500'
                  : ''
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          );
      })}
    </div>
  );
};

export default NavLink;
