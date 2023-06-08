import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

interface LottieAnimationProps {
  // note: これもWEB用のコンポーネントと同じで any になるのは仕方ない
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  animationData: any;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  return (
    <View>
      <LottieView ref={animationRef} source={animationData} loop={false} />
    </View>
  );
};
