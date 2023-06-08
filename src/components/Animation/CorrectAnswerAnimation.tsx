import React from "react";
import { LottieAnimation } from "./LottieAnimation";

export const CorrectAnswerAnimation: React.FC = () => {
  return <LottieAnimation animationData={require("@/data/lottie/76649-checked.json")} />;
};
