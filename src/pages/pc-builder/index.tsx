import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";
import {
  ComputerDesktopIcon,
  CpuChipIcon,
  CubeIcon,
  PlusCircleIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import {
  BsMotherboard,
  BsMemory,
  BsPlugin,
  BsDeviceSsd,
  BsFan,
} from "react-icons/bs";
import { PiBatteryChargingVerticalFill, PiCircuitry } from "react-icons/pi";
import { FaSave } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

const PCBuilderPage: NextPageWithLayout = () => {
  const router = useRouter();
  const categories = [
    { name: "Processor", icon: CpuChipIcon },
    { name: "Motherboard", icon: BsMotherboard },
    { name: "RAM", icon: BsMemory },
    { name: "Power Supply", icon: BsPlugin },
    { name: "Storage", icon: BsDeviceSsd },
    { name: "Monitor", icon: ComputerDesktopIcon },
    { name: "Graphics Card", icon: PiCircuitry },
    { name: "Casing", icon: CubeIcon },
    { name: "CPU Cooler", icon: BsFan },
    { name: "UPS", icon: PiBatteryChargingVerticalFill },
    { name: "Accessories", icon: SwatchIcon },
  ];

  return (
    <main className="py-10 lg:max-w-7xl mx-auto px-5">
      <section className="bg-white p-4 rounded shadow w-full lg:w-3/5 mx-auto">
        <div className="flex flex-row justify-between items-center border border-primary p-4 rounded-sm mb-4">
          <h3 className="text-lg lg:text-xl text-primary font-semibold">
            PC Builder
          </h3>
          <div className="border-2 border-secondary text-primary py-1 px-4 rounded-sm cursor-pointer hover:bg-secondary flex flex-row justify-center items-center w-fit">
            <FaSave className="w-4 h-4 mr-1 inline-block " /> <p>Save</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center border border-primary p-4 rounded-sm mb-4">
          <h3 className="w-fit">
            Total Amount: <span className="text-red-700">42000</span>
          </h3>
          <div className="bg-primary text-accent py-1 px-4 rounded-sm cursor-pointer w-fit">
            Place Order
          </div>
        </div>
        <div>
          <h1 className="text-center bg-primary py-2 rounded-sm text-accent mb-4">
            Choose Components
          </h1>
          <div className="flex flex-col gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-row justify-between items-center border-2 border-accent p-4 rounded-sm"
              >
                <div className="flex flex-row justify-center items-center gap-2">
                  <div className="rounded-sm p-2 text-primary border border-slate-300 w-fit">
                    <category.icon className="w-8 h-8 mx-auto" />{" "}
                  </div>
                  <p>{category.name}</p>
                </div>
                <Link
                  href={`/pc-builder/${category.name}`}
                  className="border-2 border-secondary text-primary py-1 px-4 rounded-sm cursor-pointer flex flex-row justify-center items-center w-fit"
                >
                  <PlusCircleIcon className="w-4 h-4 mr-1 inline-block" />{" "}
                  <p>Add</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

PCBuilderPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PCBuilderPage;

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const category = params?.category;
//   const res = await fetch(
//     `https://pc-universe-be.vercel.app/api/v1/builder-items/email=`
//   );
//   const products = await res.json();

//   return {
//     props: {
//       products: products?.data,
//     },
//   };
// };
