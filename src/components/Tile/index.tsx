import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { TileColor, TileNumber } from "@/types";
import { TILE_SIZE } from "@/constants";

type Props = {
  color: TileColor;
  number: TileNumber;
  imageStyle?: ImageStyle;
};

export const Tile: React.FC<Props> = ({ color, number, imageStyle = defaultStyles.image }: Props) => {
  return <Image style={imageStyle} source={require(`@/assets/images/tiles/${color}${number}.gif`)} />;
};

const defaultStyles = StyleSheet.create({
  image: {
    width: TILE_SIZE.width,
    height: TILE_SIZE.height,
  },
});
