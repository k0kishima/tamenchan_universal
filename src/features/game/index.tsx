import React, { useState, useRef, useContext, useEffect } from "react";
import { StyleSheet, View, Platform, TouchableOpacity, Text, Modal, ScrollView } from "react-native";
import { Board, CloseButton, CheatSheet, Hand, CorrectAnswerAnimation } from "@/components";
import { getHandAndWinTilesPairs, shuffleArray } from "@/utils";
import { TileSelector } from "./components/TileSelector";
import { GameSettingContext } from "@/contexts/GameSettingContext";

const handAndWinTilesPairs = getHandAndWinTilesPairs();

interface TileSelectorRef {
  reset: () => void;
}

export const Game = ({ navigation }) => {
  const { gameSetting } = useContext(GameSettingContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [correctAnswerAnimationVisible, setCorrectAnswerAnimationVisible] = useState(false);
  const [selectedPairs, setSelectedPairs] = useState([]);

  const currentPair = selectedPairs[currentPairIndex] || [null, null];
  const currentHand = currentPair[0];
  const currentCorrectAnswer = currentPair[1];

  const tileSelectorRef = useRef<TileSelectorRef>(null);

  useEffect(() => {
    const shuffledPairs = shuffleArray(handAndWinTilesPairs);
    setSelectedPairs(shuffledPairs.slice(0, gameSetting.numQuestions));
  }, []);

  const handleSelectionChange = (newSelectedTiles) => {
    if (!currentCorrectAnswer) return;

    const currentCorrectAnswerArray = String(currentCorrectAnswer).split("").map(Number).sort();
    const sortedNewSelectedTiles = [...newSelectedTiles].sort();

    if (
      newSelectedTiles.length === currentCorrectAnswerArray.length &&
      sortedNewSelectedTiles.every((value, index) => value === currentCorrectAnswerArray[index])
    ) {
      setCorrectAnswerAnimationVisible(true);
      setTimeout(() => {
        if (tileSelectorRef.current) {
          tileSelectorRef.current.reset();
        }
        setCorrectAnswerAnimationVisible(false);
        setCurrentPairIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % gameSetting.numQuestions;
          if (newIndex === 0) {
            // 全ての問題が終了した場合
            navigation.navigate("Result");
          }
          return newIndex;
        });
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <Board>
        <View style={styles.rightTopCorner}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.eye}>👀</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView style={styles.cheatSheetContainer}>
                <CheatSheet color={gameSetting.tileColor} handAndWinTilesPairs={handAndWinTilesPairs} />
              </ScrollView>
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "maroon", margin: 10 }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide CheatSheet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.backToHomeContainer}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <CloseButton />
        </TouchableOpacity>

        <View style={styles.tileSelectorWrapper}>
          <TileSelector color={gameSetting.tileColor} ref={tileSelectorRef} onSelectionChange={handleSelectionChange} />
        </View>

        <View style={styles.handWrapper}>
          {currentHand && <Hand color={gameSetting.tileColor} number={currentHand} containerWidthPercent={100} />}
        </View>
      </Board>
      {correctAnswerAnimationVisible && (
        <View style={styles.animationWrapper}>
          <CorrectAnswerAnimation />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  animationWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  backToHomeContainer: {
    position: "absolute",
    left: Platform.OS === "ios" ? 40 : 20,
    top: Platform.OS === "ios" ? 60 : 20,
    zIndex: 10,
  },
  rightTopCorner: {
    position: "absolute",
    right: Platform.OS === "ios" ? 40 : 20,
    top: Platform.OS === "ios" ? 60 : 20,
    zIndex: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  modalView: {
    margin: 0,
    backgroundColor: "green",
    borderRadius: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cheatSheetContainer: {
    margin: 10,
    padding: 10,
    width: "100%",
    height: "100%",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  eye: {
    fontSize: 30,
    marginBottom: 20,
  },
  tileSelectorWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  handWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
