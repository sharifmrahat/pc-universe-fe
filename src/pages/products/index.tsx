import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";
import type { GetStaticProps } from "next";
import { IProduct } from "@/types/product";
import ProductCard from "@/components/shared/ProductCard";

type ProductsPageProps = {
  products?: IProduct[];
};

const ProductsPage: NextPageWithLayout = ({ products }: ProductsPageProps) => {
  return (
    <main className="pt-10 lg:max-w-7xl px-5 mx-auto pb-20">
      <div>
        <div className="text-center mb-8">
          <h3 className="text-primary text-xl lg:text-2xl font-semibold">
            All Products
          </h3>
          <p className="text-sm lg:text-lg text-slate-500">
            Check & Get Your Desired Product!
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center items-center px-5 lg:px-16">
            {products?.length &&
              products?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://pc-universe-be.vercel.app/api/v1/products`);

  const products = await res.json();

  return {
    props: {
      products: products?.data,
    },
  };
};
