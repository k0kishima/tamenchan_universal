import handAndWinTilesPairsData from "@/data/hand_and_win_tiles_pairs.json";

export const getHandAndWinTilesPairs = (): [number, number][] => {
  const handAndWinTilesPairs = handAndWinTilesPairsData as [number, number][]; // hack
  return handAndWinTilesPairs;
};
