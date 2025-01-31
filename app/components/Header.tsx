import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Avatar from "./Avatar";

export function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/edugamez-logo2.png")}
        style={styles.logo}
      />
      <Avatar size={40} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  avatar: {
    marginRight: 10,
  },
});
