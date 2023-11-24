"use client";
import {
  fetchDataAllItem,
  fetchProducts,
  fetchProductsCategories,
} from "@/app/api/products";
import { ProductTypes, ProductCategoriesTypes } from "@/app/types";
import React, { useEffect, useState } from "react";
import CardBox from "../card/cardBox";
import Loading from "../loading";

const Product = () => {
  const [categories, setCategories] = useState<ProductCategoriesTypes>();
  const [valCategory, setValCategory] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [heart, setHeart] = useState(false);

  const getCategories = async () => {
    setLoading(true);

    try {
      const result = await fetchProductsCategories();
      setCategories(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getProducts = async () => {
    setLoading(true);

    try {
      const result = await fetchDataAllItem();
      setData(result);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const lengthProduct = (data: any, category: any) => {
    const filteredProducts = data?.products.filter(
      (item: any) => item.category === category
    );
    const jumlahItem = filteredProducts?.length;

    return jumlahItem;
  };

  const filterProduct = (data: any, category?: any) => {
    if (!category) return data?.products;
    const filteredProducts = data?.products?.filter(
      (item: any) => item.category === category
    );

    console.log(valCategory);

    return filteredProducts;
  };

  useEffect(() => {
    getCategories();

    getProducts();
  }, []);

  return (
    <>
      <div className="flex-1 ">
        <div className="flex flex-col gap-5 sticky top-10 border-2 p-4 rounded-md">
          <div>
            <span className="text-lg">Categories</span>
            <div className="flex-col flex gap-3 items-start mt-3">
              <div className="flex flex-col items-center justify-between">
                <div className="flex gap-2 items-center">
                  <input
                    onChange={(e) => {
                      setValCategory(e.target.value);
                    }}
                    value=""
                    checked={valCategory === ""}
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span>All Categories</span>
                </div>
              </div>
              {categories?.slice(0, 10).map((category, index) => (
                <div
                  className="flex flex-row w-full items-center justify-between"
                  key={index}
                >
                  <div className="flex gap-2 items-center">
                    <input
                      onChange={(e) => {
                        setValCategory(e.target.value);
                      }}
                      value={category}
                      checked={valCategory === category}
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer"
                    />
                    <span className="capitalize">{category}</span>
                  </div>
                  <span>{lengthProduct(data, category)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[3] gap-y-10 gap-x-5 max-h-[1200px] overflow-y-scroll grid grid-cols-card ">
        {filterProduct(data, valCategory)?.map((item: any) => (
          <div key={item.id}>
            <CardBox product={item} setHeart={setHeart} heart={heart} />
          </div>
        ))}
        {loading && <Loading />}
      </div>
    </>
  );
};

export default Product;
