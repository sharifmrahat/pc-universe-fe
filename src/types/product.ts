import { IUser } from "./user";

export type IReview = {
  user: IUser;
  review: string;
  rating: number;
};

export type IProduct = {
  _id: string;
  image: string;
  name: string;
  category:
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
