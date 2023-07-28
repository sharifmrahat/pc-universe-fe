import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "@/layouts/default";

const PromotionPage: NextPageWithLayout = () => {
  return <main className="my-20">Promotion Page</main>;
};

PromotionPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PromotionPage;
