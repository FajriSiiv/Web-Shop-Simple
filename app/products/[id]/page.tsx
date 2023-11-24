"use client";
import { fetchProductById } from "@/app/api/products";
import Loading from "@/app/components/loading";
import { ProductTypes } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiTwotoneStar } from "react-icons/ai";

const DetailProduct = () => {
  const [data, setData] = useState<ProductTypes>();
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const product = await fetchProductById(id);

      setData(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  if (!data) return <Loading />;

  return (
    <>
      <Link href={"/products"}>
        <div className=" w-fit ml-10 mt-5 rounded-md bg-rose-600 text-white px-6 py-2">
          Back
        </div>
      </Link>
      <div className="flex flex-row px-8 py-10">
        <div className="flex-[2] w-full flex justify-center items-center">
          <Image
            src={data.images[0]}
            alt={data.title}
            width={500}
            height={500}
          />
        </div>

        <div className="flex-1 rounded-md p-5 border-2 h-fit">
          <h1 className="font-bold text-2xl">{data.title}</h1>
          <div className="flex items-center mt-1">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <AiTwotoneStar
                key={index}
                className={`w-4 h-4 ${
                  star <= Math.round(data.rating)
                    ? "text-yellow-500"
                    : "text-[#ACACAC]"
                }`}
              />
            ))}
            <span className="ml-2 font-semibold text-sm text-gray-400">
              {data.rating}
            </span>
          </div>
          <span className="font-semibold text-sm text-gray-400">
            {data.brand}
          </span>

          <br />
          <br />
          <p className="font-semibold text-3xl mt-3">${data.price}</p>
          <br />
          <p>{data.description}</p>
          <div className="mt-5">
            <div className="w-full bg-slate-900 rounded-md h-10 flex justify-center items-center text-white gap-2 cursor-pointer">
              <AiOutlineShoppingCart />
              <span>Add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
