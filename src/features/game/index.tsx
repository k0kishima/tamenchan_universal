import React from "react";
import { StyleSheet, TouchableHighlight, View, Platform } from "react-native";
import { Board } from "@/components/Board";
import { CloseButton } from "@/components/Button";

export const Game = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Board>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <View style={styles.backToHomeContainer}>
            <CloseButton />
          </View>
        </TouchableHighlight>
      </Board>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backToHomeContainer: {
    position: "absolute",
    left: Platform.OS === "ios" ? 40 : 20,
    top: Platform.OS === "ios" ? 60 : 20,
    zIndex: 1,
  },
});
