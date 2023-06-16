import React, { useState, useEffect } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { SelectableTile } from "./SelectableTile";
import { TileNumber } from "@/types";
import { TILE_SIZE } from "@/constants";

const TILE_RATIO = TILE_SIZE.width / TILE_SIZE.height;
const TILE_WIDTH_PERCENT = 0.08;

export const TileSelector = ({ onSelectionChange }) => {
  const [selectedTiles, setSelectedTiles] = useState([]);
  const windowDimensions = useWindowDimensions();

  const tileWidth = windowDimensions.width * TILE_WIDTH_PERCENT;
  const tileHeight = tileWidth / TILE_RATIO;

  const handleTileSelected = (selected, number) => {
    const newSelectedTiles = selected ? [...selectedTiles, number] : selectedTiles.filter((tile) => tile !== number);

    setSelectedTiles(newSelectedTiles);
    onSelectionChange(newSelectedTiles);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
        <SelectableTile
          key={number}
          number={number as TileNumber}
          color="m"
          onTileSelected={handleTileSelected}
          imageStyle={{
            height: tileHeight,
            width: tileWidth,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
