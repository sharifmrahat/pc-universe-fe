import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";

const CategoriesPage: NextPageWithLayout = () => {
  return <main className="py-20 h-screen">Categories Page</main>;
};

CategoriesPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CategoriesPage;
