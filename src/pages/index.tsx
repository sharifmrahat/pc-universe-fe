import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/sections/HeroSection";

const HomePage: NextPageWithLayout = () => {
  return (
    <main className="w-full lg:max-w-7xl mx-auto">
      <section>
        <HeroSection />
      </section>
    </main>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default HomePage;
