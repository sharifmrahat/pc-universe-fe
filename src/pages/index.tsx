import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/sections/HeroSection";
import FeatureProducts from "@/components/sections/FeatureProducts";
import FeatureCategories from "@/components/sections/FeatureCategories";
import { IProduct, IProductCategory } from "@/types/product";
import { GetStaticProps } from "next";

type HomePageProps = {
  products?: IProduct[];
};
const HomePage: NextPageWithLayout = ({ products }: HomePageProps) => {
  return (
    <main className="w-full lg:max-w-7xl mx-auto px-5 lg:px-0 pb-10">
      <section>
        <HeroSection />
      </section>
      <section className="my-10">
        <FeatureProducts products={products as IProduct[]} />
      </section>
      <section className="my-20">
        <FeatureCategories />
      </section>
    </main>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://pc-universe-be.vercel.app/api/v1/products");
  const products = await res.json();
  return {
    props: {
      products: products?.data,
    },
    revalidate: 30,
  };
};
