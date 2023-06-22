import React from "react";
import { View } from "react-native";

type Props = {
  progress: number; // 0 - 100
  color: string;
};

export const ProgressBar: React.FC<Props> = ({ progress, color }) => {
  return (
    <View style={{ flexDirection: "row", height: 20, width: "100%" }}>
      <View style={{ flex: progress, backgroundColor: color }} />
      <View style={{ flex: 100 - progress }} />
    </View>
  );
};
