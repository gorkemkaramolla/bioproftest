import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import products, { ProductType } from '@/util/products';
import Product from '@/components/Product/Product';
import categorires from '@/util/categories';

type CategoryProps = {
  productList: ProductType[];
};

const Category = ({ productList }: CategoryProps) => {
  const router = useRouter();
  const { category } = router.query;
  const handleCategory = () => {
    const filteredCategories = categorires.filter(
      (listCategory: { endpoint: string | string[] | undefined }) =>
        listCategory.endpoint === category
    );
    if (filteredCategories.length > 0) {
      const { name, endpoint } = filteredCategories[0];
      return { name, endpoint };
    } else {
      return null; // or return a default value if no category with the specified endpoint is found
    }
  };

  return (
    <div>
      <BreadCrumb categoryName={handleCategory()}></BreadCrumb>

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
    (product) => product.category.endpoint === category
  );

  return {
    props: {
      productList,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = [
    { endpoint: 'temizleyici-arindirici', name: 'Temizleyici Arındırıcı' },
    { endpoint: 'onarici-bakim', name: 'Onarıcı Bakım' },
    { endpoint: 'gunes-koruyucu', name: 'Güneş Koruyucu' },
    { endpoint: 'yogun-nem-destegi', name: 'Yoğun Nem Desteği' },
    { endpoint: '/products', name: 'Tüm Ürünler' },
  ];

  const paths = categories.map((category) => ({
    params: { category: category.endpoint },
  }));

  return {
    paths,
    fallback: false, // show 404 if the category is not found in the paths
  };
};
