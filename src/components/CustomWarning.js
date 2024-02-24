import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import { getScreenHeight, getScreenWidth } from "eclipse-mobile-components";
import { defaultBorderRadius, defaultBorderWidth } from "../util/border";
import {
  defaultShadowColor,
  defaultShadowOffset,
  defaultShadowOpacity,
  defaultShadowRadius,
  defaultElevation,
} from "../util/shadow";
import { PrimaryButton } from "./PrimaryButton";
export const CustomWarning = ({
  visible,
  message,
  onClose,
  title,
  buttonTwoTitle,
  buttonTwoOnClick,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.modalTitleText}>{title}</Text>
          </View>
          <ScrollView style={{ flex: 5 }}>
            <Text style={styles.modalText}>{message}</Text>
          </ScrollView>
          <View style={{ flexDirection: "row", flex: 0.5 }}>
            {Platform.OS === "ios" ? (
              <PrimaryButton
                width={getScreenWidth() * 0.3}
                title={title}
                onPress={onClose}
              />
            ) : (
              <View style={{ padding: 1 }}>
                <PrimaryButton
                  width={getScreenWidth() * 0.3}
                  title={title}
                  onPress={onClose}
                />
              </View>
            )}
            {buttonTwoTitle !== undefined && buttonTwoOnClick !== undefined ? (
              <PrimaryButton
                width={getScreenWidth() * 0.3}
                title={buttonTwoTitle}
                onPress={buttonTwoOnClick}
              />
            ) : null}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: getScreenWidth() * 0.9,
    minHeight: getScreenHeight() * 0.3,
    margin: 20,
    borderWidth: defaultBorderWidth,
    backgroundColor: "white",
    borderRadius: defaultBorderRadius,
    padding: 35,
    alignItems: "center",
    shadowColor: defaultShadowColor,
    shadowOffset: defaultShadowOffset,
    shadowOpacity: defaultShadowOpacity,
    shadowRadius: defaultShadowRadius,
    elevation: defaultElevation,
  },
  modalTitleText: { marginBottom: 1, textAlign: "center", fontWeight: "bold" },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    flexWrap: "wrap",
  },
});
