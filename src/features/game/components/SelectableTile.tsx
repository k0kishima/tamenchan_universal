import React, { useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { Tile, Props as TileProps } from "@/components/Tile";

type Props = TileProps & {
  onTileSelected: (isSelected: boolean, selectedNumber: number) => void;
  style?: ViewStyle;
};

export const SelectableTile: React.FC<Props> = ({ onTileSelected, style, ...props }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    const isSelected = !selected;
    setSelected(isSelected);
    onTileSelected(isSelected, props.number);
  };

  return (
    <TouchableOpacity onPress={handleClick} style={style}>
      <View style={[selected ? styles.selectedTile : {}, props.imageStyle]}>
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
