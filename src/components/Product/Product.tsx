import Link from "next/link";
import React from "react";
import { useSSR } from "@nextui-org/react";

const Product = ({
  id,
  category,
  url,
  caption,
}: {
  id: number;
  category: string;
  url: string;
  caption: string;
}) => {
  const { isBrowser } = useSSR();
  if (isBrowser) {
    return (
      <Link href={`/products/${String(id)}`}>
        <div className=" container   flex flex-col justify-start items-start">
          <div
            className={`w-full justify-center  items-start flex h-[15rem] bg-cover `}
          >
            <img src={url} alt="" className="w-[15rem] h-[15rem]" />
          </div>
          <hr className="border border-green-500 w-full rounded-xl my-4" />
          <div className="text-left text-sm">
            {caption.length > 55 ? caption.slice(0, 55) + "..." : caption}
          </div>
        </div>
      </Link>
    );
  } else {
    return null;
  }
};

export default Product;
