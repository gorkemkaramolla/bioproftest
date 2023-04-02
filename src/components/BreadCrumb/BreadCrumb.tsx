import React from 'react';
import Link from 'next/link';
import { firstCharacterUpper } from '@/util/utilfunctions';
import { IoHomeOutline } from 'react-icons/io5';
import all from '@/pages/products';
type Props = {
  categoryName?: { name?: string; endpoint?: string } | undefined | null;
  productName?: string;
  all?: boolean;
  regularCategoryName?: string;
};

const BreadCrumb = (props: Props) => {
  return (
    <div className='bg-[rgb(252,252,252)] border-y mb-8 py-4 '>
      <nav
        className='flex container  conatiner mx-auto px-8 '
        aria-label='Breadcrumb'
      >
        <ol className='inline-flex items-center space-x-1 md:space-x-3 '>
          <li className='inline-flex items-center'>
            <Link
              href='/'
              className='inline-flex items-center text-sm font-medium text-gray-700  '
            >
              <IoHomeOutline className='mr-2 mb-[0.1rem] w-[1rem] h-[1rem]' />
              Ana Sayfa
            </Link>
          </li>
          {props.regularCategoryName && (
            <li>
              <div className='flex items-center'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <Link
                  href={`/${props.regularCategoryName}`}
                  className='ml-1 text-sm font-medium text-gray-700 capitalize'
                >
                  {props.regularCategoryName}
                </Link>
              </div>
            </li>
          )}
          {(props.categoryName || props.all) && (
            <li>
              <div className='flex items-center'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <Link
                  href='/products'
                  className='ml-1 text-sm font-medium text-gray-700 '
                >
                  Tüm Ürünler
                </Link>
              </div>
            </li>
          )}
          {props.categoryName && (
            <li>
              <div className='flex items-center'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <Link
                  href={`/products/category/${props.categoryName.endpoint}`}
                  className='ml-1 text-sm font-medium text-gray-700 '
                >
                  {props.categoryName.name}
                </Link>
              </div>
            </li>
          )}
          {props.categoryName && props.productName && (
            <li aria-current='page'>
              <div className='flex items-center'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400'>
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
