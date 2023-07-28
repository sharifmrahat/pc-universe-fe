import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";

const ProductDetailsPage: NextPageWithLayout = () => {
  return <main className="my-20">Products Details Page</main>;
};

ProductDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProductDetailsPage;
