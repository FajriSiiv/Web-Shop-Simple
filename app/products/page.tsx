import React from "react";
import Product from "../components/product";
import SaleUp from "../components/saleUp";

const Products = () => {
  return (
    <div className=" mt-5 px-10 flex-col">
      <div className="flex flex-row gap-10 min-h-screen">
        <Product />
      </div>
      <SaleUp />
    </div>
  );
};

export default Products;
