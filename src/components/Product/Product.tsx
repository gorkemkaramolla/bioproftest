import Link from 'next/link';
import React from 'react';
import { useSSR } from '@nextui-org/react';

const Product = ({
  id,
  name,

  category,
  url,
  caption,
}: {
  id: number;
  name: string;
  category: string;
  url: string;
  caption: string;
}) => {
  const { isBrowser } = useSSR();
  if (isBrowser) {
    return (
      <Link href={`/products/${name}`} className='group transition-all'>
        <div className='min-w-[14rem] max-w-[20rem]'>
          <div className='w-full h-full flex justify-start items-center'>
            <div className='w-full h-full flex flex-col justify-between items-center'>
              <div
                className={`justify-center items-start flex h-[15rem] bg-cover`}
              >
                <img src={url} alt='' className='w-[15rem] h-[15rem]' />
              </div>
              <hr className=' border-green-600 group-hover:border-green-400 w-full rounded-xl my-4' />
              <div className='text-left text-sm transition-colors group-hover:text-green-400 '>
                {caption.length > 55 ? caption.slice(0, 55) + '...' : caption}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-[25rem] flex  items-end">
          <div className="w-full h-full flex justify-start items-start">
            <div className=" container   flex flex-col justify-between items-start">
              <div
                className={`w-full justify-center  items-start flex h-[15rem] bg-cover `}
              >
                <img src={url} alt="" className="w-[15rem] h-[15rem]" />
              </div>
              <hr className=" border-green-600 group-hover:border-green-400 w-full rounded-xl my-4" />
              <div className="text-left text-sm transition-colors group-hover:text-green-400 ">
                {caption.length > 55 ? caption.slice(0, 55) + "..." : caption}
              </div>
            </div>
          </div>
        </div> */}
      </Link>
    );
  } else {
    return null;
  }
};

export default Product;
