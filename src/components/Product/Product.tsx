import React from "react";

const Product = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className=" container   flex flex-col justify-start items-start">
      <div
        className={`w-full justify-center  items-start flex h-[15rem] bg-cover `}
      >
        <img src={url} alt="" className="w-[15rem] h-[15rem]" />
      </div>
      <hr className="border border-green-500 w-full rounded-xl my-4" />
      <div className="text-left text-sm">
        {title.length > 55 ? title.slice(0, 55) + "..." : title}
      </div>
    </div>
  );
};

export default Product;
