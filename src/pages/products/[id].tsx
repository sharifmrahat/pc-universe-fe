/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";
import { ShoppingCartIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import type { GetStaticProps, GetStaticPaths } from "next";
import { IProduct, IReview } from "@/types/product";
import Reviews from "@/components/sections/ReviewsSections";

type ProductDetailsPageProps = {
  product?: IProduct;
};

const ProductDetailsPage: NextPageWithLayout = ({
  product,
}: ProductDetailsPageProps) => {
  return (
    <main className="py-10 lg:py-20 w-full lg:max-w-7xl mx-auto px-5">
      <section className="flex flex-col lg:flex-row justify-center items-start gap-8">
        <div className="shadow rounded p-4 bg-white lg:w-1/2">
          <img
            src={product?.image}
            alt=""
            className="w-[300px] lg:w-[400px] mx-auto object-cover"
          />
        </div>
        <div className="shadow rounded p-4 bg-white lg:w-1/2">
          <h3 className="text-lg lg:text-xl font-semibold text-primary">
            {product?.name}
          </h3>
          <p className="text-slate-600 text-base lg:text-lg font-semibold mt-2 mb-4">
            Price: <span className="text-red-700">$ {product?.price}</span>
          </p>
          <div className="lg:w-1/2 text-slate-600 my-4 flex flex-col gap-2">
            <div className="flex flex-row justify-between items-start gap-5">
              <p>Status</p>
              <p>{product?.status}</p>
            </div>
            <div className="flex flex-row justify-between items-start gap-5">
              <p>Category</p>
              <p>{product?.category}</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-5">
              <p>Model</p>
              <p>{product?.model}</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-5">
              <p>Brand</p>
              <p>{product?.brand}</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-5">
              <p>Individual Rating</p>
              <p>{product?.individualRating}</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-5">
              <p>Average Rating</p>
              <p>{product?.averageRating}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="border-b-2 border-b-slate-300 pb-0.5 text-primary">
              Specification
            </p>
            <p className="text-slate-600 py-2">{product?.specification}</p>
          </div>
          <div className="mb-4">
            <p className="border-b-2 border-b-slate-300 pb-0.5 text-primary">
              Description
            </p>
            <p className="text-slate-600 py-2">{product?.description}</p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center  gap-4">
            <div className="bg-primary py-2 px-4 rounded text-accent cursor-pointer w-full text-center">
              <ShoppingCartIcon className="h-5 w-5 inline-block mr-2 mb-0.5" />{" "}
              Add To Cart
            </div>
            <div className="bg-secondary py-2 px-4 rounded text-primary cursor-pointer w-full text-center">
              <SquaresPlusIcon className="h-5 w-5 inline-block mr-2 mb-0.5" />{" "}
              Add To Build
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 w-full lg:w-4/5 mx-auto">
        <Reviews reviews={product?.reviews as IReview[]} />
      </section>
    </main>
  );
};

ProductDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProductDetailsPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id;
  const res = await fetch(
    `https://pc-universe-be.vercel.app/api/v1/products/${productId}`
  );

  const product = await res.json();

  return {
    props: {
      product: product?.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://pc-universe-be.vercel.app/api/v1/products");
  const products = await res.json();

  const paths = products?.data?.map((product: IProduct) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};
