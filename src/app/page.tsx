"use client";
import ProductCard from "@/components/ProductCard";
import React from "react";
import products from "@/products";
import useFilterStore from "@/stores/FilterStore";
const Home = () => {
  const { filterString } = useFilterStore();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterString.toLowerCase())
  );

  return (
    <>
      <main className="flex justify-center mb-12 overflow-x-hidden">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
          {filteredProducts.map((product) => (
            <ProductCard {...product} key={product.id}/>
          ))}
        </div>
      </main>
    </>
  );
};
export default Home;
