import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../constant/loader.json";

export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={25} width={100} />
    </div>
  );
}
