import { Product } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart, AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";

const CardBox = ({
  product,
  setHeart,
  heart,
}: {
  product: Product;
  setHeart: any;
  heart: any;
}) => {
  const handleItemClick = (id: any) => {
    setHeart(id);
    console.log(id);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div
        key={product.id}
        className="h-72 w-full border-2 border-gray-200 rounded-xl p-3 relative select-none flex-1 mx-auto"
      >
        <div
          onClick={() => handleItemClick(product.id)}
          className="absolute right-3 top-4 rounded-full p-2 bg-[#B3D4E5]  transition-colors duration-300 cursor-pointer"
        >
          <AiFillHeart
            className={` w-5 h-5  ${
              product.id === heart ? "text-rose-600" : "text-[#292D32]"
            }`}
          />
        </div>
        <div className="w-full h-44 flex items-center justify-center overflow-hidden mb-2 rounded-xl">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={150}
            height={200}
            className="object-contain w-full "
            priority
          />
        </div>
        <div>
          <div>
            <p className="text-primary mb-1 font-semibold">
              {product.title.substring(0, 20)}..
            </p>
            <span className="text-secondary font-semibold">
              ${product.price}
            </span>
            <div className="flex items-center gap-3 mt-1">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <AiTwotoneStar
                  key={index}
                  className={`w-4 h-4 ${
                    star <= Math.round(product.rating)
                      ? "text-yellow-500"
                      : "text-[#ACACAC]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardBox;
