import React from "react";
import Rating from "./Rating";
export interface ProductCardProps {
  id: number;
  price: number;
  title: string;
  rating: 1 | 2 | 3 | 4 | 5;
  description: string;
  imgUrl: string;
  type: string;
}

const ProductCard = (product: ProductCardProps) => {
  return (
    <div className="py-6 px-3">
      <div className="flex max-w-md bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition ease-linear">
        <img width="150" height="100" src={`/products/${product.imgUrl}`} alt={product.title} />
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{product.title}</h1>
          <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
          <div className="flex item-center mt-2">
            <Rating value={product.rating} />
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">
              ${product.price}
            </h1>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
