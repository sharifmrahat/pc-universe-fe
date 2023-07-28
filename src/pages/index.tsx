import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import DefaultLayout from "@/layouts/default";

const HomePage: NextPageWithLayout = () => {
  return <main className="w-full lg:max-w-7xl mx-auto my-10">home page</main>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default HomePage;
