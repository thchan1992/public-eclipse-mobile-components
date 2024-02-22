import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import { defaultBorderWidth } from "../util/border";
import { SafeAreaView } from "react-native";

export const CustomModal = ({
  showModal,
  children,
  containerStyle,
  contentStyle,
  borderWidth,
  borderRadius,
  borderColor,
  ...modalProps
}) => {
  return (
    <Modal visible={showModal} {...modalProps}>
      <SafeAreaView
        style={[
          styles.container,
          containerStyle,
          {
            borderWidth:
              borderWidth !== undefined ? borderWidth : defaultBorderWidth,
            borderRadius: borderRadius !== undefined ? borderRadius : 30,
            borderColor: borderColor !== undefined ? borderColor : "black",
          },
        ]}
      >
        <View style={[styles.content, contentStyle]}>{children}</View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  content: {
    margin: 50,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowRadius: 4,
  },
});
