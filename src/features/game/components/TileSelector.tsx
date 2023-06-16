import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { SelectableTile } from "./SelectableTile";
import { TileNumber } from "@/types";
import { TILE_SIZE } from "@/constants";

export const TileSelector = ({ onSelectionChange }) => {
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [tileSize, setTileSize] = useState({ width: 80, height: 112 });

  const windowWidth = useWindowDimensions().width;
  const spacing = windowWidth * 0.02;

  useEffect(() => {
    const numberOfTiles = 9;
    const availableWidth = windowWidth - spacing * 2 * numberOfTiles;

    const tileWidth = availableWidth / numberOfTiles;
    const tileHeight = tileWidth * (TILE_SIZE.height / TILE_SIZE.width);

    setTileSize({ width: tileWidth, height: tileHeight });
  }, [windowWidth]);

  const handleTileSelected = (selected, number) => {
    const newSelectedTiles = selected ? [...selectedTiles, number] : selectedTiles.filter((tile) => tile !== number);

    setSelectedTiles(newSelectedTiles);
    onSelectionChange(newSelectedTiles);
  };

  return (
    <View style={[styles.tileSelector, { paddingHorizontal: spacing }]}>
      {Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
        <SelectableTile
          key={number}
          number={number as TileNumber}
          color="m"
          onTileSelected={handleTileSelected}
          imageStyle={tileSize}
          style={{ margin: spacing }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tileSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
  },
});
