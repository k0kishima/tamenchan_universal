import React, { useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { Tile, Props as TileProps } from "@/components/Tile";

type Props = TileProps & {
  onTileSelected: (isSelected: boolean, selectedNumber: number) => void;
  isSelected: boolean;
  style?: ViewStyle;
};

export const SelectableTile: React.FC<Props> = ({ onTileSelected, isSelected, style, ...props }) => {
  const handleClick = () => {
    const newSelectedState = !isSelected;
    onTileSelected(newSelectedState, props.number);
  };

  return (
    <TouchableOpacity onPress={handleClick} style={style}>
      <View style={[isSelected ? styles.selectedTile : {}, props.imageStyle]}>
        <Tile {...props} />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  selectedTile: {
    opacity: 0.5,
  },
};
