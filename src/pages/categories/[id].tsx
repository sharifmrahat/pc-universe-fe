import React, { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";

const CategoryDetailsPage: NextPageWithLayout = () => {
  return <main className="my-20">Products Page</main>;
};

CategoryDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default CategoryDetailsPage;
