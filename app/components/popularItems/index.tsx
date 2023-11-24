"use client";
import {
  fetchProducts,
  fetchProductsByCategory,
  fetchProductsCategories,
} from "@/app/api/products";
import { ProductTypes } from "@/app/types";
import Image from "next/image";
import { AiTwotoneStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import React from "react";
import { useEffect, useState } from "react";
import Loading from "../loading";
import CardBox from "../card/cardBox";

const PopularItems = () => {
  const [data, setData] = useState<ProductTypes>();
  const [categories, setCategories] = useState<any>();
  const [heart, setHeart] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async (category: string) => {
    try {
      setLoading(true);

      const result = await fetchProductsByCategory(category);
      setData(result);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

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

  useEffect(() => {
    getData("smartphones");
    getCategories();
  }, []);

  if (!data) return <Loading />;

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h2 className="w-3/5 font-semibold text-2xl text-primary">
          Popular products
        </h2>

        <div
          className="flex justify-end items-center gap-7 w-2/5
      "
        >
          {categories?.slice(0, 4).map((category: string, index: any) => (
            <span
              className={` rounded-full py-2 px-9 text-sm border-2  capitalize cursor-pointer text-primary
                ${
                  category === data.products[0].category
                    ? " border-primary"
                    : "border-gray-300"
                }
              `}
              onClick={() => getData(category)}
              key={index}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-card gap-8 mt-10 flex-row">
        {data &&
          data.products.map((product: ProductTypes) => (
            <CardBox product={product} setHeart={setHeart} heart={heart} />
          ))}

        {loading && <Loading />}
      </div>
    </div>
  );
};

export default PopularItems;
