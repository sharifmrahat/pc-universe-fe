/* eslint-disable @next/next/no-img-element */
import { IProduct } from "@/types/product";
import { StarIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-sm rounded border overflow-hidden hover:shadow-lg">
      <Link href={{ pathname: `products/${product._id}` }}>
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
      </Link>
      <div className="flex flex-col gap-2 mt-4">
        <Link href={`products/${product._id}`} replace>
          <h3 className="text-lg lg:text-xl font-semibold px-5 w-fit mx-auto text-center">
            {product.name.length > 25
              ? product.name.substring(0, 25) + "..."
              : product.name}
          </h3>
          <div className="w-fit mx-auto px-5">
            <p className="text-red-500 font-semibold">$ {product.price}</p>
          </div>
        </Link>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="bg-primary w-fit text-accent rounded-tr p-2 cursor-pointer">
            <SquaresPlusIcon className="w-6 h-6" />
          </div>
          <Link href={`products/${product._id}`} className="w-full">
            <div className="w-fit mx-auto flex flex-row items-center text-center">
              <p className="mr-2">{product.averageRating}</p>
              <div className="w-fit mx-auto">
                <StarIcon className="w-4 h-4  text-orange-400" />
              </div>
            </div>
          </Link>
          <div className="bg-primary text-accent w-fit rounded-tl p-2 cursor-pointer">
            <ShoppingCartIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
