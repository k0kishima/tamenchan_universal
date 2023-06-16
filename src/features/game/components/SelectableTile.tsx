import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Tile, Props as TileProps } from "@/components/Tile";

type Props = TileProps & {
  onTileSelected: (isSelected: boolean) => void;
};

export const SelectableTile: React.FC<Props> = ({ onTileSelected, ...props }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    const isSelected = !selected;
    setSelected(isSelected);
    onTileSelected(isSelected);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Tile {...props} imageStyle={{ ...props.imageStyle, opacity: selected ? 0.5 : 1 }} />
    </TouchableOpacity>
  );
};
