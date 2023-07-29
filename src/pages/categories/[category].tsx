import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProduct } from "@/types/product";
import CategoryProductCard from "@/components/shared/CategoryProductCard";
import { useRouter } from "next/router";

type CategoryDetailsPageProps = {
  products?: IProduct[];
};

const CategoryDetailsPage: NextPageWithLayout = ({
  products,
}: CategoryDetailsPageProps) => {
  const router = useRouter();
  const category = router.query?.category;
  return (
    <main className="pt-10 lg:max-w-7xl px-5 mx-auto pb-20">
      <div>
        <div className="text-center mb-8">
          <h3 className="text-primary text-xl lg:text-2xl font-semibold">
            Product Category: {category}
          </h3>
          <p className="text-sm lg:text-lg text-slate-500">
            Check & Get Your Desired Product!
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center items-center px-5 lg:px-0">
            {products?.length &&
              products?.map((product) => (
                <CategoryProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

CategoryDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CategoryDetailsPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category;
  const res = await fetch(
    `https://pc-universe-be.vercel.app/api/v1/products?category=${category}`
  );

  const products = await res.json();
  return {
    props: {
      products: products?.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://pc-universe-be.vercel.app/api/v1/products");
  const products = await res.json();

  const paths = products?.data?.map((product: IProduct) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: false };
};
