import PCBuilderProductCard from "@/components/shared/PCBuilderProductCard";
import DefaultLayout from "@/layouts/default";
import { IProduct } from "@/types/product";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";

type PCBuilderDetailsPageProgs = {
  products?: IProduct[];
};

const PCBuilderDetailsPage = ({ products }: PCBuilderDetailsPageProgs) => {
  const router = useRouter();
  const category = router.query?.category;
  return (
    <main className="pt-10 lg:max-w-7xl px-5 mx-auto pb-20">
      <div>
        <div className="text-center mb-8">
          <h3 className="text-primary text-xl lg:text-2xl font-semibold">
            Product Category: {category}
          </h3>
          <p className="text-sm lg:text-lg text-slate-500">
            Check & Get Your Desired Product!
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center items-center px-5 lg:px-0">
            {products?.length &&
              products?.map((product) => (
                <PCBuilderProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

PCBuilderDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PCBuilderDetailsPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const category = params?.category;
  const res = await fetch(
    `https://pc-universe-be.vercel.app/api/v1/products?category=${category}`
  );
  const products = await res.json();

  return {
    props: {
      products: products?.data,
    },
  };
};
