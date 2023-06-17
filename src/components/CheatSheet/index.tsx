import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Hand } from "@/components/Hand";
import { TileColor } from "@/types";

type Props = {
  handAndWinTilesPairs: [number, number][];
  color: TileColor;
};

export const CheatSheet: React.FC<Props> = ({ handAndWinTilesPairs, color }: Props) => {
  return (
    <ScrollView style={styles.container}>
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
            <Hand color={color} number={hand} containerWidthPercent={65} />
          </View>
          <View style={[styles.column, { flex: 3 }]}>
            <Hand color={color} number={winTiles} containerWidthPercent={25} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
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
