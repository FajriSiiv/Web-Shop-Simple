import React from "react";
import Lottie from "lottie-react";
import loadingPage from "../../loading.json";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-40 z-10 flex items-center justify-center flex-col mb-2">
      <Lottie animationData={loadingPage} loop={true} className="w-56 h-56" />
    </div>
  );
};

export default Loading;
