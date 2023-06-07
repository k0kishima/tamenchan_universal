import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Tile } from "@/components/Tile";
import { TileColor, TileNumber } from "@/types";
import { TILE_SIZE } from "@/constants";

type Props = {
  color: TileColor;
  number: number;
};

export const Hand: React.FC<Props> = ({ color, number }: Props) => {
  const windowWidth = useWindowDimensions().width;

  const imageWidth = windowWidth * 0.07;
  const imageHeight = imageWidth * (TILE_SIZE.height / TILE_SIZE.width); // set height as per the ratio

  const imageStyle = {
    width: imageWidth,
    height: imageHeight,
  };

  return (
    <View style={styles.container}>
      {(Array.from(String(number)).map((n) => parseInt(n)) as TileNumber[]).map((n, i) => (
        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <Tile color={color} number={n} imageStyle={imageStyle} key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
