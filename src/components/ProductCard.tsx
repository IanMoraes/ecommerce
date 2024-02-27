"use client";
import React from "react";
import Rating from "./Rating";
import { IProduct } from "@/interfaces/IProduct";
import useCartStore from "@/stores/CartStore";
const ProductCard = (product: IProduct) => {
  const { cartItems, setCartItems } = useCartStore();

  const addToCart = () => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div className="py-6 px-3">
      <div className="flex max-w-md bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition ease-linear">
        <img
          className="h-[220px] max-w-[35%] object-fill object-center"
          src={`/products/${product.imgUrl}`}
          alt={product.title}
        />
        <div className="p-4 flex flex-col">
          <h1 className="text-gray-900 font-bold text-2xl">{product.title}</h1>
          <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
          <div className="flex item-center mt-2">
            <Rating value={product.rating} />
          </div>
          <div className="flex item-center justify-between  mt-auto ">
            <h1 className="text-gray-700 font-bold text-xl">
              ${product.price}
            </h1>
            <button
              className="px-3 py-2 bg-gray-800  text-white text-xs font-bold uppercase rounded hover:scale-[1.1]  transform active:scale-75 transition-transform"
              onClick={addToCart}
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
