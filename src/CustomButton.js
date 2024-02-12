import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export function CustomButton({ title }) {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 12,
    backgroundColor: "blue",
  },
  buttonText: {
    textAlign: "center",
    margin: 10,
  },
});
