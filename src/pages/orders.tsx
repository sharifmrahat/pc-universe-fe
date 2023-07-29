import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "@/layouts/default";

const OrdersPage: NextPageWithLayout = () => {
  return <main className="py-20">Orders Page</main>;
};

OrdersPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default OrdersPage;
