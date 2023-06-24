import React, { useContext, useState } from "react";
import Modal from "react-native-modal";
import { StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native";
import Slider from "@react-native-community/slider";
import { GameSettingContext } from "@/contexts/GameSettingContext";
import { ALL_TILE_COLORS, TileColor } from "@/types";
import { Tile } from "@/components";

export const Home = ({ navigation }) => {
  const { gameSetting, setGameSetting } = useContext(GameSettingContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTileColorChange = (color: TileColor) => {
    setGameSetting({ ...gameSetting, tileColor: color });
  };

  const handleSliderValueChange = (value: number) => {
    const scaledValue = Math.round(value * 5) * 10;
    setGameSetting({ ...gameSetting, numQuestions: scaledValue });
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
        isVisible={modalVisible}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalView}>
          <View style={styles.leftAlignedContainer}>
            <Text>Use type of tiles</Text>
          </View>
          <View style={styles.tileContainer}>
            {ALL_TILE_COLORS.map((color) => (
              <TouchableOpacity key={color} onPress={() => handleTileColorChange(color)}>
                <View style={gameSetting.tileColor === color ? styles.selectedTile : styles.notSelectedTile}>
                  <Tile color={color} number={1} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.sliderContainer}>
            <Text>
              Number of Questions: <Text style={{ fontWeight: "bold" }}>{gameSetting.numQuestions}</Text>
            </Text>
            <Slider
              style={{ width: "100%" }}
              value={gameSetting.numQuestions / 50}
              onValueChange={handleSliderValueChange}
              minimumValue={0.1}
              minimumTrackTintColor="maroon"
              maximumTrackTintColor="#000000"
              thumbTintColor="maroon"
              step={0.2}
            />
          </View>
          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: "maroon", margin: 10 }}
            onPress={handleSaveSettings}
          >
            <Text style={styles.textStyle}>Save Settings</Text>
          </TouchableOpacity>
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
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
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
  sliderContainer: {
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  leftAlignedContainer: {
    alignSelf: "flex-start",
    width: "100%",
  },
});
