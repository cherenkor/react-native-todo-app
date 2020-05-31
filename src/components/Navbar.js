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
    paddingBottom: 10,
    ...Platform.select({
      android: {
        backgroundColor: THEME.COLORS.PRIMARY_COLOR,
      },
      ios: {
        borderBottomWidth: 1,
        borderBottomColor: THEME.COLORS.PRIMARY_COLOR,
      },
    }),
  },
  text: {
    color: "#fff",
    fontSize: 20,
    ...Platform.select({
      android: {
        color: "#fff",
      },
      ios: {
        color: THEME.COLORS.PRIMARY_COLOR,
      },
    }),
  },
});
