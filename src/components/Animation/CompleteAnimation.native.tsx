import React from "react";
import LottieView from "lottie-react-native";

export const CompleteAnimation: React.FC = () => {
  return <LottieView source={require("@/data/lottie/96075-completed.json")} autoPlay loop={false} />;
};
