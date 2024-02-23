import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { defaultBorderRadius, defaultBorderWidth } from "../util/border";
import { getScreenWidth, getScreenHeight } from "../util/dimensions";

export const TabSystem = ({
  tabOneTitle,
  tabTwoTitle,
  tabOneContent,
  tabTwoContent,
  height,
  width,
}) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "tab1" && styles.activeTab]}
          onPress={() => setActiveTab("tab1")}
        >
          <Text
            style={[styles.text, activeTab === "tab1" && styles.activeText]}
          >
            {tabOneTitle}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "tab2" && styles.activeTab]}
          onPress={() => setActiveTab("tab2")}
        >
          <Text
            style={[styles.text, activeTab === "tab2" && styles.activeText]}
          >
            {tabTwoTitle}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.contentContainer,
          height !== undefined && width !== undefined
            ? { height, width }
            : undefined,
        ]}
      >
        {activeTab === "tab1" ? tabOneContent : tabTwoContent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: { color: "grey", textAlign: "center" },
  activeText: { color: "black", fontWeight: "bold" },
  tab: {
    width: getScreenWidth() * 0.4,
    borderWidth: defaultBorderWidth,
    borderRadius: defaultBorderRadius,
    borderColor: "grey",
    margin: 10,
    padding: 10,
  },
  activeTab: {
    width: getScreenWidth() * 0.4,
    borderWidth: defaultBorderWidth,
    borderRadius: defaultBorderRadius,
    borderColor: "black",
    // borderBottomColor: "blue",
    margin: 10,
    padding: 10,
  },
  contentContainer: {
    borderWidth: defaultBorderWidth,
    borderRadius: defaultBorderRadius,
    padding: 20,
    width: getScreenWidth() * 0.95,
    height: getScreenHeight() * 0.7,
  },
});
