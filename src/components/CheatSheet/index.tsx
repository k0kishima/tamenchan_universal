import React from "react";
import { View, StyleSheet } from "react-native";
import { Hand } from "@/components/Hand";

type Props = {
  handAndWinTilesPairs: [number, number][];
};

export const CheatSheet: React.FC<Props> = ({ handAndWinTilesPairs }: Props) => {
  return (
    <View style={styles.container}>
      {handAndWinTilesPairs.map(([hand, winTiles], i) => (
        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <View key={i} style={styles.row}>
          <View style={[styles.column, { flex: 7 }]}>
            <Hand color="m" number={hand} containerWidthPercent={70} />
          </View>
          <View style={[styles.column, { flex: 3 }]}>
            <Hand color="m" number={winTiles} containerWidthPercent={30} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
  },
  column: {},
});
