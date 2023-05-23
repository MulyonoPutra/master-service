import { Category } from "./category";

export interface Product {
  id?: string;
  name: string;
  price: number;
  quantity: number;
  sku: string;
  description: string;
  category: Category;
}
