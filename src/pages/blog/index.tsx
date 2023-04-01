import React from 'react';
import blogs from '@/util/blogs';
import BlogCard from '@/components/Blog';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Link from 'next/link';
const Blog = () => {
  return (
    <div>
      <BreadCrumb regularCategoryName='Blog' />
      <div className='container mx-auto'>
        <div className='text-xl font-bold text-black ml-6 md: md:ml-12 xl:ml-16 mb-4'>
          Blog
        </div>
        <div className='flex flex-col gap-6 items-center'>
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
