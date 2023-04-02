import React from 'react';
import blogs from '@/util/blogs';
import BlogCard from '@/components/Blog';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Link from 'next/link';
const Blog = () => {
  return (
    <div>
      <BreadCrumb regularCategoryName='blog' />
      <div className='container mx-auto'>
        <div className='flex flex-col gap-6 items-start mb-8 sm:mx-8 mx-4'>
          <div className='text-xl font-bold text-black text-left  mb-4'>
            Blog
          </div>
          {blogs.map((blog, index) => (
            <div key={index} className='w-full'>
              <Link
                key={index}
                href={
                  '/blog/' + blog?.title?.toLowerCase().replaceAll(' ', '-')
                }
              >
                <BlogCard
                  src={blog?.src}
                  title={blog?.title}
                  text={blog?.text}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
