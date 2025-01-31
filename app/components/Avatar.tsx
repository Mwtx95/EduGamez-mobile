import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Avatar as PaperAvatar } from "react-native-paper";

interface AvatarProps {
  source?: string | number; // Can be either a local require() or a URL
  size?: number;
  style?: any;
}

export default function ({
  source = require("../../assets/images/seif.jpg"),
  size = 40,
  style,
}: AvatarProps) {
  // If source is a string (URL), use it directly, otherwise use the local image
  const imageSource = typeof source === "string" ? { uri: source } : source;

  return (
    <View style={[styles.container, style]}>
      <PaperAvatar.Image
        size={size}
        source={imageSource}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    backgroundColor: "transparent",
  },
});
