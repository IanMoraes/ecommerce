import ProductCard from "@/components/ProductCard";
import React from "react";
import products from "@/products";
const Home = () => {
  return (
    <>
      <main className="flex justify-center mb-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
          {products.map((product)=> <ProductCard  description={product.description} id={product.id} imgUrl={product.imgUrl} price={product.price} key={product.id} rating={product.rating} title={product.title} type={product.type}/>)}
        </div>
      </main>
    </>
  );
};
export default Home;
