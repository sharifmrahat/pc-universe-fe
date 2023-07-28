import { IProductCategory } from "@/types/product";
import CategoryCard from "../shared/CategoryCard";

const FeatureCategories = () => {
  const categories: { name: IProductCategory; image: string }[] = [
    { name: "Processor", image: "processor.jpg" },
    { name: "Motherboard", image: "motherboard.jpg" },
    { name: "RAM", image: "ram.jpg" },
    { name: "Power Supply", image: "power-supply.jpg" },
    { name: "Storage", image: "storage.jpg" },
    { name: "Monitor", image: "monitor.jpg" },
    { name: "Graphics Card", image: "graphics-card.jpg" },
    { name: "Casing", image: "casing.jpg" },
    { name: "CPU Cooler", image: "cpu-cooler.jpg" },
    { name: "UPS", image: "ups.jpg" },
    { name: "Accessories", image: "accessories.jpg" },
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
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 justify-center items-center px-5 lg:px-0">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCategories;
