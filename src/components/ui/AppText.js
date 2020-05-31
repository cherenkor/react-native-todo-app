import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppText = (props) => (
  <Text style={{ ...styles.default, ...props.styles }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-regular",
  },
});

export default AppText;
