import React, { useState } from "react";
import { StyleSheet, View, Platform, TouchableOpacity, Text, Modal } from "react-native";
import { Board, CloseButton, CheatSheet, Hand, CorrectAnswerAnimation } from "@/components";
import { getHandAndWinTilesPairs } from "@/utils";
import { TileSelector } from "./components/TileSelector";

const handAndWinTilesPairs = getHandAndWinTilesPairs();

export const Game = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [correctAnswerAnimationVisible, setCorrectAnswerAnimationVisible] = useState(false);

  const currentPair = handAndWinTilesPairs[currentPairIndex];
  const currentHand = currentPair[0];
  const currentCorrectAnswer = currentPair[1];

  const handleSelectionChange = (newSelectedTiles) => {
    const currentCorrectAnswerArray = String(currentCorrectAnswer).split("").map(Number).sort();
    const sortedNewSelectedTiles = [...newSelectedTiles].sort();

    if (
      newSelectedTiles.length === currentCorrectAnswerArray.length &&
      sortedNewSelectedTiles.every((value, index) => value === currentCorrectAnswerArray[index])
    ) {
      setCorrectAnswerAnimationVisible(true);
      setTimeout(() => {
        setCorrectAnswerAnimationVisible(false);
        setCurrentPairIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % handAndWinTilesPairs.length;
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
              <CheatSheet handAndWinTilesPairs={handAndWinTilesPairs} />
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "maroon" }}
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
          <TileSelector onSelectionChange={handleSelectionChange} />
        </View>

        <View style={styles.handWrapper}>
          <Hand color="m" number={currentHand} containerWidthPercent={100} />
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
    marginTop: 22,
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    borderRadius: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
