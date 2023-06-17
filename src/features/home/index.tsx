import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Platform } from "react-native";

export const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Game")}>
        <Text>Play</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.gearIcon}>⚙️</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Settings</Text>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "maroon", margin: 10 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close Settings</Text>
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
    position: "relative",
  },
  settingsButton: {
    position: "absolute",
    right: Platform.OS === "ios" ? 40 : 20,
    top: Platform.OS === "ios" ? 60 : 20,
  },
  gearIcon: {
    fontSize: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    width: "80%",
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
});
