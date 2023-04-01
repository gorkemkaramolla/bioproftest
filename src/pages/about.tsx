import About from '@/components/About/About';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import React from 'react';
type Props = {};

const about = (props: Props) => {
  return (
    <div>
      <BreadCrumb regularCategoryName={'about'}></BreadCrumb>
      <About />
    </div>
  );
};

export default about;
