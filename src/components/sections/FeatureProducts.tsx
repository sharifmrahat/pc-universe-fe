import { IProduct } from "@/types/product";
import ProductCard from "../shared/ProductCard";

type FeatureProductsProps = {
  products: IProduct[];
};

const FeatureProducts = ({ products }: FeatureProductsProps) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-primary text-xl lg:text-2xl font-semibold">
          Feature Products
        </h3>
        <p className="text-sm lg:text-lg text-slate-500">
          Check & Get Your Desired Product!
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 px-5 lg:px-0">
          {products?.length &&
            products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
