/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type CategoryCardProps = {
  category: { name: string; image: string };
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      href={`/products?category=${category.name}`}
      className="bg-white shadow-sm rounded border overflow-hidden hover:shadow-lg p-3"
    >
      <div className="w-fit mx-auto">
        <img src={category.image} alt="" className="w-20 h-20" />
      </div>
      <h3 className="mt-3 w-fit mx-auto font-semibold text-primary text-center">
        {category.name}
      </h3>
    </Link>
  );
};

export default CategoryCard;
