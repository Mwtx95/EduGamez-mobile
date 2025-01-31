import React from "react";
import { Tabs } from "expo-router";
import { useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image } from "react-native";
import Avatar from "../components/Avatar";
import logo from "../../assets/images/edugamez-logo2.png";


const renderHeaderRight = () => (
  <Avatar size={40} style={{ marginRight: 10 }} />
);

export default function TabLayout() {
  const theme = useTheme();

  return (
    //tabs recent changes
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.outline,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderTopColor: theme.colors.outline,
            borderTopWidth: 0.5,
            // tabs recent changes
            height: 95,
            paddingTop: 7,
            paddingBottom: 25,
          },
          headerRight: renderHeaderRight,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
            headerTitle: () => (
              <Image
                source={logo}
                style={{ width: 120, height: 40, resizeMode: 'contain' }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="review"
          options={{
            title: "Review",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="check-circle"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="leaderboard"
          options={{
            title: "Leaderboard",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="trophy" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
            headerRight: undefined,
          }}
        />
      </Tabs>
      {/* powered by text: */}
      <View style={styles.poweredByContainer}>
        <Text style={styles.poweredByText}>Powered by HMY Technologies</Text>
      </View>
    </View>
  );
}
// powered by style:
const styles = StyleSheet.create({
  poweredByContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    alignItems: "center",
    paddingBottom: 5,
    zIndex: 1000,
    borderTopWidth: 0.5,
    borderTopColor: "#e0e0e0",
    paddingTop: 12,
  },
  poweredByText: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
  },
});
