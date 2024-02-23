import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getScreenWidth } from "../util/dimensions";

import { defaultBorderRadius, defaultBorderWidth } from "../util/border";
import {
  defaultElevation,
  defaultShadowColor,
  defaultShadowOffset,
  defaultShadowRadius,
} from "../util/shadow";
import { defaultShadowOpacity } from "../util/shadow";

export const AccordionSection = ({ title, children, width }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View
      style={[
        styles.container,
        width !== undefined ? { width: width } : undefined,
      ]}
    >
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.header}
      >
        <Text style={styles.headerText}>
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        </Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: getScreenWidth() * 0.9,
    borderWidth: defaultBorderWidth,
    borderRadius: defaultBorderRadius,
    padding: 5,
    shadowColor: defaultShadowColor,
    shadowOffset: defaultShadowOffset,
    shadowOpacity: defaultShadowOpacity,
    shadowRadius: defaultShadowRadius,
    elevation: defaultElevation,
  },
  header: {
    padding: 10,
    backgroundColor: "white",
  },
  headerText: {
    fontWeight: "bold",
  },
  content: {
    padding: 10,
  },
});
