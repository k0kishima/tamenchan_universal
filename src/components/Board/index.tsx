import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  children?: ReactNode;
};

export const Board: React.FC<Props> = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: "100%",
    width: "100%",
  },
});
