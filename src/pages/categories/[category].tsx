import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProduct } from "@/types/product";
import CategoryProductCard from "@/components/shared/CategoryProductCard";
import { useRouter } from "next/router";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center items-center px-5 lg:px-16">
            {products?.length ? (
              products?.map((product) => (
                <CategoryProductCard key={product._id} product={product} />
              ))
            ) : (
              <>
                <div className="rounded-md bg-yellow-50 p-4 w-fit mx-auto">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <ExclamationTriangleIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        Not Items Found!
                      </h3>
                    </div>
                  </div>
                </div>
              </>
            )}
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
