import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Hand } from "@/components/Hand";

type Props = {
  handAndWinTilesPairs: [number, number][];
};

export const CheatSheet: React.FC<Props> = ({ handAndWinTilesPairs }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.column, { flex: 7 }]}>
          <Text style={styles.rowTitle}>手牌</Text>
        </View>
        <View style={[styles.column, { flex: 3 }]}>
          <Text style={styles.rowTitle}>待ち</Text>
        </View>
      </View>
      {handAndWinTilesPairs.map(([hand, winTiles], index) => (
        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <View key={index} style={styles.row}>
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
  rowTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  column: {},
});
