import React from "react";
import LottieView from "lottie-react-native";

export const CorrectAnswerAnimation: React.FC = () => {
  return <LottieView source={require("@/data/lottie/76649-checked.json")} autoPlay loop={false} />;
};
