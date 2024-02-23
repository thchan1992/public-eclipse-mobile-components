import { getScreenWidth } from "../util/dimensions";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { defaultBorderWidth } from "../util/border";
import {
  defaultElevation,
  defaultShadowColor,
  defaultShadowOffset,
  defaultShadowOpacity,
  defaultShadowRadius,
} from "../util/shadow";

export const CustomAvatar = ({ imageSource, badgeCount, size, badgeSize }) => {
  const avatarSize = size !== undefined ? size : getScreenWidth() * 0.25;
  const avatarBadgeSize =
    badgeSize !== undefined ? badgeSize : getScreenWidth() * 0.08;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.shadowContainer,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      >
        <Image
          source={imageSource}
          style={[
            styles.avatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarSize / 2,
            },
          ]}
        />
      </View>
      {badgeCount !== undefined && (
        <View
          style={[
            styles.badge,
            {
              width: avatarBadgeSize,
              height: avatarBadgeSize,
              borderRadius: avatarBadgeSize / 2,
            },
          ]}
        >
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  shadowContainer: {
    shadowColor: defaultShadowColor,
    shadowOffset: defaultShadowOffset,
    shadowOpacity: defaultShadowOpacity,
    shadowRadius: defaultShadowRadius,
    elevation: defaultElevation,
    width: getScreenWidth() * 0.25,
    height: getScreenWidth() * 0.25,
    borderRadius: 100,
  },
  avatar: {
    width: getScreenWidth() * 0.25,
    height: getScreenWidth() * 0.25,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: defaultBorderWidth,
  },
  badge: {
    position: "absolute",
    right: -5,
    top: -5,
    borderWidth: defaultBorderWidth / 2,
    backgroundColor: "red",
    borderRadius: 100,
    width: getScreenWidth() * 0.08,
    height: getScreenWidth() * 0.08,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
  },
});
