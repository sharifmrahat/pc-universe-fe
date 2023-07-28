import { IUser } from "./user";

export type IReview = {
  user: IUser;
  review: string;
  rating: number;
};

export type IProductCategory =
  | "Processor"
  | "Motherboard"
  | "RAM"
  | "Power Supply"
  | "Storage"
  | "Monitor"
  | "Graphics Card"
  | "Casing"
  | "CPU Cooler"
  | "UPS"
  | "Accessories";

export type IProduct = {
  _id: string;
  image: string;
  name: string;
  category: IProductCategory;
  status: "In Stock" | "Out of Stock";
  price: number;
  brand: string;
  model: string;
  description?: string;
  specification?: string;
  individualRating?: number;
  averageRating?: number;
  reviews?: IReview[];
};
