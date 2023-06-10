import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const CloseButton: React.FC = () => {
  return (
    <View style={styles.closeButtonContainer}>
      <Icon name="close" size={30} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  closeButtonContainer: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
  },
});
