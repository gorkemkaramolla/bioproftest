import React from "react";

type Props = {
  imgSrc: string;
};

const Banner = (props: Props) => {
  return (
    <div className="col-span-12 my-1  ">
      <img className="w-full" src={props.imgSrc} alt="" />
    </div>
  );
};

export default Banner;
