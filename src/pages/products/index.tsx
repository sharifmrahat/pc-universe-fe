import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";

const ProductsPage: NextPageWithLayout = () => {
  return <main className="my-20">Products Page</main>;
};

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ProductsPage;
