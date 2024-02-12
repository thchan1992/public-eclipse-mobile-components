import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { getScreenHeight, getScreenWidth } from "../util/dimensions";
import { buttonColour } from "../util/colours";

export const PrimaryButton = ({ title, onPress, size }) => {
  const sizeStyles = {
    small: {
      height: getScreenHeight() * 0.05,
      width: getScreenWidth() * 0.35,
    },
    large: {
      height: getScreenHeight() * 0.05,
      width: getScreenWidth() * 0.8,
    },
  };
  return (
    <TouchableOpacity
      style={[styles.button, sizeStyles[size]]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 12,
    backgroundColor: buttonColour,
  },
  buttonText: {
    textAlign: "center",
    margin: 10,
  },
});
