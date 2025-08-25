import { createContext } from "react";

export type Item = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  brand: string;
  returnPolicy: string;
  rating: number;
  shippingInformation: string;
  category: string;
};

export type DataContextType = {
  items: Item[];
  loading: boolean;
};

export const DataContext = createContext<DataContextType>({
  items: [],
  loading: true,
});
