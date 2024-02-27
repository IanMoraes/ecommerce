"use client";
import { IProduct } from "@/interfaces/IProduct";
import useCartStore from "@/stores/CartStore";
import React from "react";

export default function CartCard(product: IProduct) {
  
  const { cartItems, setCartItems } = useCartStore();

  const addQuantity = () => {

      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedCartItems);
   
  };
  const removeQuantity = () => {
    const updatedCartItems = cartItems
      .map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0); 

    setCartItems(updatedCartItems);
  };
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={`/products/${product.imgUrl}`}
        alt={product.title}
        className="aspect-[16/9] rounded-lg sm:w-40 object-fill h-24"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
          <p className="mt-1 text-xs text-gray-700">{product.description}</p>
        </div>
        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            
            onClick={removeQuantity}
            >
              {" "}
              -{" "}
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              value={product.quantity}
            />
            <span
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={addQuantity}
            >
              {" "}
              +{" "}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
