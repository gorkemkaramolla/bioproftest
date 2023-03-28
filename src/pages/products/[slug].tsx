import React, { useContext } from 'react';
import { useRouter } from 'next/router';

const Car = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className='mt-[5.5rem] m-4'>
      <div className='container mx-auto py-4 '>
        <div>{slug}</div>
      </div>
    </div>
  );
  // else return <div></div>;
};

export default Car;
