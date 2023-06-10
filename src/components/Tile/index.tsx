import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";
import { TileColor, TileNumber } from "@/types";
import { TILE_SIZE } from "@/constants";

type Props = {
  color: TileColor;
  number: TileNumber;
  imageStyle?: ImageStyle;
};

type TileImages = Record<TileColor, Record<TileNumber, ReturnType<typeof require>>>;
const tileImages: TileImages = {
  m: {
    1: require("@/assets/images/tiles/m1.gif"),
    2: require("@/assets/images/tiles/m2.gif"),
    3: require("@/assets/images/tiles/m3.gif"),
    4: require("@/assets/images/tiles/m4.gif"),
    5: require("@/assets/images/tiles/m5.gif"),
    6: require("@/assets/images/tiles/m6.gif"),
    7: require("@/assets/images/tiles/m7.gif"),
    8: require("@/assets/images/tiles/m8.gif"),
    9: require("@/assets/images/tiles/m9.gif"),
  },
  p: {
    1: require("@/assets/images/tiles/p1.gif"),
    2: require("@/assets/images/tiles/p2.gif"),
    3: require("@/assets/images/tiles/p3.gif"),
    4: require("@/assets/images/tiles/p4.gif"),
    5: require("@/assets/images/tiles/p5.gif"),
    6: require("@/assets/images/tiles/p6.gif"),
    7: require("@/assets/images/tiles/p7.gif"),
    8: require("@/assets/images/tiles/p8.gif"),
    9: require("@/assets/images/tiles/p9.gif"),
  },
  s: {
    1: require("@/assets/images/tiles/p1.gif"),
    2: require("@/assets/images/tiles/p2.gif"),
    3: require("@/assets/images/tiles/p3.gif"),
    4: require("@/assets/images/tiles/p4.gif"),
    5: require("@/assets/images/tiles/p5.gif"),
    6: require("@/assets/images/tiles/p6.gif"),
    7: require("@/assets/images/tiles/p7.gif"),
    8: require("@/assets/images/tiles/p8.gif"),
    9: require("@/assets/images/tiles/p9.gif"),
  },
};

export const Tile: React.FC<Props> = ({ color, number, imageStyle = defaultStyles.image }: Props) => {
  return <Image style={imageStyle} source={tileImages[color][number]} />;
};

const defaultStyles = StyleSheet.create({
  image: {
    width: TILE_SIZE.width,
    height: TILE_SIZE.height,
  },
});
