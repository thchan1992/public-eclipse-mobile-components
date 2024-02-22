import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { defaultInputColour } from "../util/colours";
import { getScreenHeight, getScreenWidth } from "../util/dimensions";
import {
  defaultElevation,
  defaultShadowColor,
  defaultShadowOffset,
  defaultShadowOpacity,
  defaultShadowRadius,
} from "../util/shadow";
import { defaultBorderRadius, defaultBorderWidth } from "../util/border";
import { defaultTextFieldColour } from "../util/colours";

export const TextField = ({
  value,
  setter,
  placeholder,
  textStyle = {},
  textSize,
  width,
  height,
  inputColour,
  borderRadius = defaultBorderRadius,
  borderWidth = defaultBorderWidth,
  backgroundColour = defaultTextFieldColour,
}) => {
  const textFieldStyle = {
    ...(width && { width }),
    ...(height && { height }),
    ...(textSize && { fontSize: textSize }),
    borderRadius,
    borderWidth,
    ...(backgroundColour !== undefined && {
      backgroundColor: backgroundColour,
    }),
  };

  return (
    <TextInput
      placeholder={placeholder}
      style={[
        styles.input,
        textStyle,
        textFieldStyle,
        { color: inputColour === undefined ? defaultInputColour : inputColour },
      ]}
      value={value}
      onChangeText={setter}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    width: getScreenWidth() * 0.8,
    height: getScreenHeight() * 0.05,

    backgroundColor: defaultTextFieldColour,
    shadowOffset: defaultShadowOffset,
    shadowColor: defaultShadowColor,
    shadowRadius: defaultShadowRadius,
    shadowOpacity: defaultShadowOpacity,
    elevation: defaultElevation,
    borderWidth: defaultBorderWidth,
    borderRadius: defaultBorderRadius,
  },
});
