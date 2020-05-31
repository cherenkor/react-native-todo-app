import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../theme";
import AppTextBold from "./ui/AppTextBold";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.COLORS.PRIMARY_COLOR,
    paddingBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
