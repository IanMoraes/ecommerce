"use client";
import CartCard from "@/components/CartCard";
import useCartStore from "@/stores/CartStore";
import React from "react";

export default function page() {
  const { cartItems, setCartItems } = useCartStore();
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingCost = 4.99;  
    return subtotal + shippingCost;
  };
  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      {cartItems.length>0 ? (<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
        {cartItems.map((product) => (
            <CartCard {...product} key={product.id}/>
          ))}
        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${calculateSubtotal().toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className=""> <p className="mb-1 text-lg font-bold">${calculateTotal().toFixed(2)} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={()=>setCartItems([])}>
            Check out
          </button>
        </div>
      </div>):(
      <h2 className="mb-10 text-center text-xl font-bold text-gray-700">There are no items in the cart</h2>)}
      
    </div>
  );
}
