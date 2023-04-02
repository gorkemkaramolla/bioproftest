import Image from 'next/image';
import React from 'react';

const BlogCard = ({
  src,
  title,
  text,
}: {
  src: string;
  title: string;
  text: string;
}) => {
  return (
    <div className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 group p-4 md:p-12 gap-4 md:gap-10 shadow-2xl rounded-sm'>
      <div className='overflow-hidden rounded-xl bg-cover shadow-2xl'>
        <img
          src={src}
          className={
            'group-hover:scale-[1.02] w-full h-full md:h-[22rem] rounded-xl transition-all duration-500 group-hover:opacity-80'
          }
          alt=''
        />
      </div>
      <div>
        <div className='text-3xl text-black mb-4 md:mb-8'>{title}</div>
        <div className='text-gray-400'>{text.slice(0, 300)}...</div>
      </div>
    </div>
  );
};

export default BlogCard;
