import React from 'react';
import Link from 'next/link';
type Props = {
  imgSrc: string;
  url: string;
};

const Banner = (props: Props) => {
  return (
    <Link className='col-span-12   ' href={props.url}>
      <div>
        <img className='w-full' src={props.imgSrc} alt='' />
      </div>
    </Link>
  );
};

export default Banner;
