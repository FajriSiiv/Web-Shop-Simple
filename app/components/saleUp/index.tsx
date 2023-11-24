import Image from "next/image";
import React from "react";
import CameraIMG from "../../../public/images/cameta-nobg.png";

const SaleUp = () => {
  return (
    <div className="rounded-lg bg-[#161616] w-full h-80 mt-10 relative overflow-hidden flex flex-row text-white">
      <div className="flex-[3] relative">
        <Image
          src={CameraIMG}
          alt="Laptop"
          width={250}
          height={250}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex flex-[2] flex-col h-full justify-center items-center gap-y-5">
        <h2 className="text-[#2E8FC5] font-bold text-4xl">
          Sale up to 50% off
        </h2>
        <button className="w-fit bg-[#EDA415] px-5 py-2 rounded-md">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default SaleUp;
