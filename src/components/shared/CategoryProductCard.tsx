/* eslint-disable @next/next/no-img-element */
import { IProduct } from "@/types/product";
import { StarIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.replace(`/products/${product._id}`);
    router.push(`/products/${product._id}`);
  };
  return (
    <div className="bg-white shadow-sm rounded border overflow-hidden hover:shadow-lg cursor-pointer">
      <div onClick={handleNavigation}>
        <div className="flex flex-row justify-between items-center relative top-0">
          <div className="bg-secondary text-primary py-0.5 px-1  rounded-br-sm w-fit text-sm">
            {product.category}
          </div>
          <div className="bg-secondary text-primary py-0.5 px-1 rounded-bl-sm w-fit text-sm">
            {product.status}
          </div>
        </div>
        <img
          src={product.image}
          alt=""
          className="w-[200px] h-[200px] mx-auto object-fit"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div onClick={handleNavigation}>
          <h3 className="text-lg lg:text-xl font-semibold px-5 w-fit mx-auto text-center">
            {product.name}
          </h3>
          <div className="w-fit mx-auto px-5">
            <p className="text-red-500 font-semibold">$ {product.price}</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="bg-primary w-fit text-accent rounded-tr p-2 cursor-pointer">
            <SquaresPlusIcon className="w-6 h-6" />
          </div>
          <div onClick={handleNavigation} className="w-full">
            <div className="w-fit mx-auto flex flex-row items-center text-center">
              <p className="mr-2">{product.averageRating}</p>
              <div className="w-fit mx-auto">
                <StarIcon className="w-4 h-4  text-orange-400" />
              </div>
            </div>
          </div>
          <div className="bg-primary text-accent w-fit rounded-tl p-2 cursor-pointer">
            <ShoppingCartIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
