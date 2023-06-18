import handAndWinTilesPairsData from "@/data/hand_and_win_tiles_pairs.json";

export const getHandAndWinTilesPairs = (): [number, number][] => {
  const handAndWinTilesPairs = handAndWinTilesPairsData as [number, number][]; // hack
  return handAndWinTilesPairs;
};

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
