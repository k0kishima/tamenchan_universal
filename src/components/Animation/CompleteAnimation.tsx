import React from "react";
import { LottieAnimation } from "./LottieAnimation";

export const CompleteAnimation: React.FC = () => {
  return <LottieAnimation animationData={require("@/data/lottie/96075-completed.json")} />;
};
