import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { View } from "react-native";

interface LottieAnimationProps {
  // note: ここがanyになるのは仕方ない
  // JavaScript のオブジェクトを含む JSON ファイルを TypeScript の型システムで型付けする方法はあるが・・
  // アニメーションデータのように複雑な構造を持つ場合や、内容が予測不可能な場合には any を使用するしかない
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  animationData: any;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData,
      });
    }
  }, [animationData]);

  return <View ref={container} />;
};
