import { IProductCategory } from "@/types/product";
import CategoryCard from "../shared/CategoryCard";

import {
  Bars3Icon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CubeIcon,
  SquaresPlusIcon,
  SwatchIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  BsMotherboard,
  BsMemory,
  BsPlugin,
  BsDeviceSsd,
  BsFan,
} from "react-icons/bs";
import { PiBatteryChargingVerticalFill, PiCircuitry } from "react-icons/pi";

const FeatureCategories = () => {
  const categories: { name: IProductCategory; icon: any }[] = [
    { name: "Processor", icon: CpuChipIcon },
    { name: "Motherboard", icon: BsMotherboard },
    { name: "RAM", icon: BsMemory },
    { name: "Power Supply", icon: BsPlugin },
    { name: "Storage", icon: BsDeviceSsd },
    { name: "Monitor", icon: ComputerDesktopIcon },
    { name: "Graphics Card", icon: PiCircuitry },
    { name: "Casing", icon: CubeIcon },
    { name: "CPU Cooler", icon: BsFan },
    // { name: "UPS", icon: PiBatteryChargingVerticalFill },
    { name: "Accessories", icon: SwatchIcon },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-primary text-xl lg:text-2xl font-semibold">
          Feature Categories
        </h3>
        <p className="text-sm lg:text-lg text-slate-500">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 justify-center items-center px-5 lg:px-16">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCategories;
