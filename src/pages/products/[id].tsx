/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";
import { ShoppingCartIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";

const ProductDetailsPage: NextPageWithLayout = () => {
  return (
    <main className="py-10 lg:py-20 w-full lg:max-w-7xl mx-auto px-5">
      <section className="flex flex-col lg:flex-row justify-center items-start gap-8">
        <div className="shadow rounded p-4 bg-white lg:w-1/2">
          <img
            src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/mp223/mp223-06-500x500.webp"
            alt=""
            className="w-[300px] lg:w-[400px] mx-auto object-cover"
          />
        </div>
        <div className="shadow rounded p-4 bg-white lg:w-1/2">
          <h3 className="text-lg lg:text-xl font-semibold text-primary">
            MSI PRO MP223 21.45 Full HD Business Monitor
          </h3>
          <p className="text-slate-600 text-base lg:text-lg font-semibold mt-2 mb-4">
            Price: <span className="text-red-700">$ 250</span>
          </p>
          <div className="lg:w-1/2 text-slate-600 my-4 flex flex-col gap-2">
            <div className="flex flex-row justify-between items-start gap-5">
              <p>Status</p>
              <p>In Stock</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-5">
              <p>Model</p>
              <p>ABCD</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-5">
              <p>Brand</p>
              <p>MSI</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-5">
              <p>Individual Rating</p>
              <p>4.5</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-5">
              <p>Average Rating</p>
              <p>4</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="border-b-2 border-b-slate-300 pb-0.5 text-primary">
              Description
            </p>
            <p className="text-slate-600 py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam unde
              fugit, illo consequatur cum veniam! Accusantium exercitationem
              explicabo voluptatum perferendis.
            </p>
          </div>
          <div className="mb-4">
            <p className="border-b-2 border-b-slate-300 pb-0.5 text-primary">
              Specification
            </p>
            <p className="text-slate-600 py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam unde
              fugit, illo consequatur cum veniam! Accusantium exercitationem
              explicabo voluptatum perferendis.
            </p>
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
    </main>
  );
};

ProductDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProductDetailsPage;
