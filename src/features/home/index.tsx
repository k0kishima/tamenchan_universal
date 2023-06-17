import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Platform } from "react-native";
import { GameSettingContext } from "@/contexts/GameSettingContext";
import { ALL_TILE_COLORS, TileColor } from "@/types";
import { Tile } from "@/components";

export const Home = ({ navigation }) => {
  const { gameSetting, setGameSetting } = useContext(GameSettingContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTileColorChange = (color: TileColor) => {
    setGameSetting({ tileColor: color });
  };

  const handleSaveSettings = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Game")}>
        <Text>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.gearWrapper}>
        <Text style={styles.gear}>⚙️</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.tileContainer}>
              {ALL_TILE_COLORS.map((color) => (
                <TouchableOpacity key={color} onPress={() => handleTileColorChange(color)}>
                  <View style={gameSetting.tileColor === color ? styles.selectedTile : styles.notSelectedTile}>
                    <Tile color={color} number={1} />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "maroon", margin: 10 }}
              onPress={handleSaveSettings}
            >
              <Text style={styles.textStyle}>Save Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  gearWrapper: {
    position: "absolute",
    right: Platform.OS === "ios" ? 40 : 20,
    top: Platform.OS === "ios" ? 60 : 20,
  },
  gear: {
    fontSize: 30,
  },
  selected: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tileContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  selectedTile: {
    padding: 10,
    opacity: 1,
  },
  notSelectedTile: {
    padding: 10,
    opacity: 0.5,
  },
});
