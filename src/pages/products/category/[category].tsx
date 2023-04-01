import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import products, { ProductType } from '@/util/products';
import Product from '@/components/Product/Product';

type CategoryProps = {
  productList: ProductType[];
};

const Category = ({ productList }: CategoryProps) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <BreadCrumb categoryName={String(category)}></BreadCrumb>

      <div className='w-full mx-auto h-full'>
        <div className='w-fit p-8 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 mx-auto grid lg:grid-cols-4 '>
          {productList.length === 0 ? (
            <p>Bu kategoriye ait ürün bulunmamaktadır</p>
          ) : (
            productList.map((product, i) => (
              <Product
                name={product.name}
                key={i}
                id={product.id}
                category={product.category}
                url={product.url}
                caption={product.caption}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;
  const productList = products.filter(
    (product) => product.category === category
  );

  return {
    props: {
      productList,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = [
    'temizleyici-arındırıcı',
    'yoğun-nem-desteği',
    'onarıcı-bakım',
    'güneş-koruyucu',
    'tüm ürünler',
  ];

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false, // show 404 if the category is not found in the paths
  };
};
