import React from "react";
import { View, StyleSheet } from "react-native";
import { CompleteAnimation } from "@/components";

export const Result = () => {
  return (
    <View style={styles.container}>
      <CompleteAnimation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
});
