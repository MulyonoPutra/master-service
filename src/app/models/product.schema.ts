import { Schema, model } from "mongoose";
import { Product } from "../domain/product";

const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    sku: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  { timestamps: true }
);

export default model<Product>("Product", productSchema);
