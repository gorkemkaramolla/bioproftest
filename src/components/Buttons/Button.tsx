import React from 'react';
import Link from 'next/link';
type Props = {
  name: string;
  url: string;
};

const Button = (props: Props) => {
  return (
    <Link href={props.url} className='inline-flex'>
      <span className='h-8 rounded-sm    flex items-center justify-center uppercase font-semibold px-6 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out'>
        {props.name}
      </span>
    </Link>
  );
};

export default Button;
