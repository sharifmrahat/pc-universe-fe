import PCBuilderProductCard from "@/components/shared/PCBuilderProductCard";
import DefaultLayout from "@/layouts/default";
import { IProduct } from "@/types/product";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
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
            PC Builder Items: {category}
          </h3>
          <p className="text-sm lg:text-lg text-slate-500">
            Check & Get Your Desired Product!
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center items-center px-5 lg:px-0">
            {products?.length ? (
              products?.map((product) => (
                <PCBuilderProductCard key={product._id} product={product} />
              ))
            ) : (
              <>
                <div className="rounded-md bg-yellow-50 p-4 w-fit mx-auto">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <ExclamationTriangleIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        Not Items Found!
                      </h3>
                    </div>
                  </div>
                </div>
              </>
            )}
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
