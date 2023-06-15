import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, View, Platform, TouchableOpacity, Text, Modal } from "react-native";
import { Board } from "@/components/Board";
import { CloseButton } from "@/components/Button";
import { getHandAndWinTilesPairs } from "@/utils";
import { CheatSheet } from "@/components/CheatSheet";

const handAndWinTilesPairs = getHandAndWinTilesPairs();

export const Game = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

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

        <TouchableHighlight
          underlayColor="#DDDDDD"
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <View style={styles.backToHomeContainer}>
            <CloseButton />
          </View>
        </TouchableHighlight>
      </Board>
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
  backToHomeContainer: {
    position: "absolute",
    left: Platform.OS === "ios" ? 40 : 20,
    top: Platform.OS === "ios" ? 60 : 20,
    zIndex: 1,
  },
  rightTopCorner: {
    position: "absolute",
    right: Platform.OS === "ios" ? 40 : 20,
    top: Platform.OS === "ios" ? 60 : 20,
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
});
