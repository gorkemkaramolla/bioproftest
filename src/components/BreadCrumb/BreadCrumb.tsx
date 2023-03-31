import React from 'react';
import Link from 'next/link';
import { firstCharacterUpper } from '@/util/utilfunctions';
import all from '@/pages/products';
type Props = {
  categoryName?: string;
  productName?: string;
  all?: boolean;
  regularCategoryName?: string;
};

const BreadCrumb = (props: Props) => {
  return (
    <nav
      className='flex py-4  px-8  mb-8  bg-[rgb(252,252,252)]   border-b'
      aria-label='Breadcrumb'
    >
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <Link
            href='/'
            className='inline-flex items-center text-sm font-medium text-gray-700  '
          >
            <svg
              aria-hidden='true'
              className='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
            </svg>
            Home
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
                className='ml-1 text-sm font-medium text-gray-700 '
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
                href={`/products/category/${props.categoryName}`}
                className='ml-1 text-sm font-medium text-gray-700 '
              >
                {firstCharacterUpper(props.categoryName)}
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
                {props?.productName && firstCharacterUpper(props?.productName)}
              </span>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
