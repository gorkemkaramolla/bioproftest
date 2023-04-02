import React from 'react';
import Link from 'next/link';
import { firstCharacterUpper } from '@/util/utilfunctions';
import { IoHomeOutline } from 'react-icons/io5';
import { BsChevronRight } from 'react-icons/bs';
import all from '@/pages/products';
type Props = {
  categoryName?: { name?: string; endpoint?: string } | undefined | null;
  productName?: string;
  all?: boolean;
  regularCategoryName?: string;
};

const BreadCrumb = (props: Props) => {
  return (
    <div className='bg-[rgb(252,252,252)] border-y mb-8 py-4 [&_li]:text-xs [&_li]:text-center'>
      <nav
        className='flex container  conatiner mx-auto sm:px-8 px-4 '
        aria-label='Breadcrumb'
      >
        <ol className='inline-flex items-center space-x-1 md:space-x-3 '>
          <li className='inline-flex items-center'>
            <Link
              href='/'
              className='inline-flex items-center font-medium text-gray-700  '
            >
              <IoHomeOutline className='mr-2 mb-[0.1rem] w-[1rem] h-[1rem]' />
              Ana Sayfa
            </Link>
          </li>
          {props.regularCategoryName && (
            <li>
              <div className='flex items-center'>
                <BsChevronRight />
                <Link
                  href={`/${props.regularCategoryName}`}
                  className='ml-1 font-medium text-gray-700 capitalize'
                >
                  {props.regularCategoryName}
                </Link>
              </div>
            </li>
          )}
          {(props.categoryName || props.all) && (
            <li>
              <div className='flex items-center'>
                <BsChevronRight />
                <Link
                  href='/products'
                  className='ml-1 font-medium text-gray-700 '
                >
                  Tüm Ürünler
                </Link>
              </div>
            </li>
          )}
          {props.categoryName?.name &&
            props.categoryName?.name !== 'Tüm Ürünler' && (
              <li>
                <div className='flex items-center'>
                  <BsChevronRight />
                  <Link
                    href={`/products/category/${props?.categoryName?.endpoint}`}
                    className='ml-1 font-medium text-gray-700 '
                  >
                    {props?.categoryName?.name}
                  </Link>
                </div>
              </li>
            )}
          {props.categoryName && props.productName && (
            <li aria-current='page'>
              <div className='flex items-center'>
                <BsChevronRight />
                <span className='ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400'>
                  {props?.productName &&
                    firstCharacterUpper(props?.productName)}
                </span>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
