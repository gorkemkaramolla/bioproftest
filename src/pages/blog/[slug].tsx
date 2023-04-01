import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import blogs from '@/util/blogs';
import { useRouter } from 'next/router';
import React from 'react';

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.filter(
    (blog) => blog.title.toLowerCase().replaceAll(' ', '-') === slug
  )[0];
  return (
    <div>
      <BreadCrumb regularCategoryName='Blog' />
      <div className='container mx-auto space-y-4'>
        <div className='text-2xl font-bold text-black'>{blog.title}</div>
        <div>
          <img src={blog.src} alt='' />
        </div>
        <div className='text-gray-500 leading-relaxed'>{blog.text}</div>
      </div>
    </div>
  );
};

export default Blog;
