import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "@/layouts/default";

const ServicePage: NextPageWithLayout = () => {
  return <main className="py-20 h-screen lg:max-w-7xl max-auto"></main>;
};

ServicePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ServicePage;
