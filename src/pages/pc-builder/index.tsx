/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "@/layouts/default";
import {
  ComputerDesktopIcon,
  CpuChipIcon,
  CubeIcon,
  PlusCircleIcon,
  SwatchIcon,
  TrashIcon,
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

import Link from "next/link";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { IPCBuilder } from "@/types/pc-builder";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type PCBuilderPage = {
  builderItem?: IPCBuilder;
};

const PCBuilderPage: NextPageWithLayout = ({ builderItem }: PCBuilderPage) => {
  const { data: session } = useSession();
  const router = useRouter();
  const categories = [
    { name: "Processor", icon: CpuChipIcon, required: true },
    { name: "Motherboard", icon: BsMotherboard, required: true },
    { name: "RAM", icon: BsMemory, required: true },
    { name: "Power Supply", icon: BsPlugin, required: false },
    { name: "Storage", icon: BsDeviceSsd, required: true },
    { name: "Monitor", icon: ComputerDesktopIcon, required: false },
    { name: "Graphics Card", icon: PiCircuitry, required: false },
    { name: "Casing", icon: CubeIcon, required: false },
    { name: "CPU Cooler", icon: BsFan, required: false },
    { name: "UPS", icon: PiBatteryChargingVerticalFill, required: false },
    { name: "Accessories", icon: SwatchIcon, required: false },
  ];

  const handleRemove = (productId: string) => {
    const data = {
      user: session?.user?.email,
      id: productId,
    };
    if (session?.user && data) {
      fetch("https://pc-universe-be.vercel.app/api/v1/pc-builders", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            router.push("/pc-builder");
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const handleSaveItem = () => {
    const requiredCategories = categories
      .filter((category) => category.required)
      .map((category) => category.name);

    const requiredAdded = requiredCategories.every((category) =>
      builderItem?.items?.some((item) => item.category === category)
    );
    if (requiredAdded) {
      toast.success("Items saved successfully");
    } else {
      toast.error("Please add required items");
    }
  };

  return (
    <main className="py-10 lg:max-w-7xl mx-auto px-5">
      <section className="bg-white p-4 rounded shadow w-full lg:w-3/5 mx-auto">
        <div className="flex flex-row justify-between items-center border border-primary p-4 rounded-sm mb-4">
          <h3 className="text-lg lg:text-xl text-primary font-semibold">
            PC Builder
          </h3>
          <div
            onClick={handleSaveItem}
            className="border-2 border-secondary text-primary py-1 px-4 rounded-sm cursor-pointer hover:bg-secondary flex flex-row justify-center items-center w-fit"
          >
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
          <div className="flex flex-col gap-4 overflow-hidden">
            {categories.map((category) => {
              if (
                !builderItem?.items.some(
                  (item) => item.category === category.name
                )
              ) {
                return (
                  <div
                    key={category.name}
                    className="flex flex-row justify-between items-center border-2 border-accent p-4 rounded-sm"
                  >
                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="rounded-sm p-2 text-primary border border-slate-300 w-fit">
                        <category.icon className="w-8 h-8 mx-auto" />{" "}
                      </div>
                      <p>{category.name} </p>
                      <p className="text-xs text-red-700">
                        {category.required ? "*Required" : ""}
                      </p>
                    </div>
                    <Link
                      href={`/pc-builder/${category.name}`}
                      className="border-2 border-secondary text-primary py-1 px-4 rounded-sm cursor-pointer flex flex-row justify-center items-center w-fit"
                    >
                      <PlusCircleIcon className="w-4 h-4 mr-1 inline-block" />{" "}
                      <p>Add</p>
                    </Link>
                  </div>
                );
              } else {
                const itemsForCategory = builderItem?.items?.filter(
                  (item) => item.category === category.name
                );
                return (
                  <div key={category.name}>
                    {itemsForCategory.map((item) => (
                      <div
                        key={item._id}
                        className="flex flex-row justify-between items-center border-2 border-accent p-4 rounded-sm overflow-hidden"
                      >
                        <div className="flex flex-row justify-center items-center gap-2">
                          <div className="rounded-sm p-2 text-primary border border-slate-300 w-fit">
                            <img
                              src={item.image}
                              alt=""
                              className="w-8 h-8 mx-auto"
                            />
                          </div>
                          <p>{item.name}</p>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                          <p className="font-semibold text-red-600">
                            $ {item.price}
                          </p>
                          <div
                            onClick={() => handleRemove(item._id)}
                            className=" bg-red-600 text-white py-1 px-4 rounded-sm cursor-pointer flex flex-row justify-center items-center w-fit"
                          >
                            <TrashIcon className="w-4 h-4 mr-1 inline-block" />{" "}
                            <p>Remove</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
            })}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const res = await fetch(
    `https://pc-universe-be.vercel.app/api/v1/pc-builders/${session?.user?.email}`
  );
  const items = await res.json();
  return {
    props: {
      builderItem: items?.data,
    },
  };
};
