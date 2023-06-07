import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Game = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
