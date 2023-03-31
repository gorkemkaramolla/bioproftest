import Navbar from "@/components/Navbar";
import React from "react";
import Product from "../../components/Product/Product";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import products from "@/util/products";

const all = () => {
  return (
    <div>
      <BreadCrumb all={true}></BreadCrumb>
      <div className=" w-full  container md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-12 mx-auto grid lg:grid-cols-4 ">
        {products.map((product, i) => (
          <Product
            name={product.name}
            key={i}
            id={product.id}
            category={product.category}
            url={product.url}
            caption={product.caption}
          />
        ))}
      </div>
    </div>
  );
};
export default all;
