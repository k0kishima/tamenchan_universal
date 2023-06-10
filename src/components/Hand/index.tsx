import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Tile } from "@/components/Tile";
import { TileColor, TileNumber } from "@/types";
import { TILE_SIZE } from "@/constants";

type Props = {
  color: TileColor;
  number: number;
  containerWidthPercent: number;
};

export const Hand: React.FC<Props> = ({ color, number, containerWidthPercent }: Props) => {
  const windowWidth = useWindowDimensions().width;
  const containerWidthPixel = (windowWidth * containerWidthPercent) / 100;

  const imageWidth = containerWidthPixel / Array.from(String(number)).length;
  const imageHeight = imageWidth * (TILE_SIZE.height / TILE_SIZE.width);

  const imageStyle = {
    width: imageWidth,
    height: imageHeight,
  };

  return (
    <View style={styles.container}>
      {(Array.from(String(number)).map((n) => parseInt(n)) as TileNumber[]).map((n, i) => (
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
