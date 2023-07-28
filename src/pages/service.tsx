import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "@/layouts/default";

const ServicePage: NextPageWithLayout = () => {
  return <main className="my-20">Service Page</main>;
};

ServicePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default ServicePage;
