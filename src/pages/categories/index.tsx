import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";

const CategoriesPage: NextPageWithLayout = () => {
  return <main className="my-20">Products Page</main>;
};

CategoriesPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CategoriesPage;
