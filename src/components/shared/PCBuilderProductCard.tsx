/* eslint-disable @next/next/no-img-element */
import { IProduct } from "@/types/product";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  PlusCircleIcon,
  ShoppingCartIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type PCBuilderProductCardProps = {
  product: IProduct;
};

const PCBuilderProductCard = ({ product }: PCBuilderProductCardProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleNavigation = () => {
    router.replace(`/products/${product._id}`);
    router.push(`/products/${product._id}`);
  };

  const handleAddToBuilder = (productId: string) => {
    const data = {
      user: session?.user?.email,
      items: [productId],
    };
    if (session?.user && data) {
      fetch("https://pc-universe-be.vercel.app/api/v1/pc-builders", {
        method: "POST",
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
            {product.name.length > 25
              ? product.name.substring(0, 25) + "..."
              : product.name}
          </h3>
          <div className="w-fit mx-auto px-5">
            <p className="text-red-500 font-semibold">$ {product.price}</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div onClick={handleNavigation} className="w-full">
            <div className="w-fit mx-auto flex flex-row items-center text-center">
              <p className="mr-2">{product.averageRating}</p>
              <div className="w-fit mx-auto">
                <StarIcon className="w-4 h-4  text-orange-400" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() => handleAddToBuilder(product._id)}
            className="bg-primary w-full text-accent p-2 cursor-pointer flex flex-row justify-center items-center gap-2"
          >
            <PlusCircleIcon className="w-6 h-6" /> <p>Add to Builder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCBuilderProductCard;
