import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";

const PCBuilderPage: NextPageWithLayout = () => {
  return <main className="my-20">PC Builder Page</main>;
};

PCBuilderPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PCBuilderPage;
