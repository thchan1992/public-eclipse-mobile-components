import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { getScreenHeight, getScreenWidth } from "../util/dimensions";
import { buttonColour } from "../util/colours";
import { defaultBorderRadius, defaultBorderWidth } from "../util/border";
import {
  defaultShadowColor,
  defaultShadowOffset,
  defaultShadowOpacity,
  defaultShadowRadius,
  defaultElevation,
} from "../util/shadow";

export const PrimaryButton = ({
  title,
  onPress,
  size,
  backgroundColour,
  textColour,
  borderRadius = defaultBorderRadius,
  borderWidth = defaultBorderWidth,
  textStyle = {},
  width,
  height,
}) => {
  const sizeStyles =
    size !== undefined
      ? {
          small: {
            height: getScreenHeight() * 0.05,
            width: getScreenWidth() * 0.35,
          },
          large: {
            height: getScreenHeight() * 0.05,
            width: getScreenWidth() * 0.8,
          },
        }[size] || small
      : {
          height: getScreenHeight() * 0.05,
          width: getScreenWidth() * 0.35,
        };

  // conditional style application
  const buttonStyle = {
    ...styles.button,
    ...sizeStyles,
    ...(width !== undefined && { width }),
    ...(height !== undefined && { height }),
    ...(backgroundColour !== undefined
      ? {
          backgroundColor: backgroundColour,
        }
      : { backgroundColor: buttonColour }),
    borderRadius,
    borderWidth,
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColour }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: buttonColour,
    margin: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: defaultShadowColor,
    shadowOffset: defaultShadowOffset,
    shadowOpacity: defaultShadowOpacity,
    shadowRadius: defaultShadowRadius,
    elevation: defaultElevation,
  },
  buttonText: {
    textAlign: "center",
    margin: 5,
    fontWeight: "bold",
    fontSize: getScreenWidth() * 0.04,
  },
});
