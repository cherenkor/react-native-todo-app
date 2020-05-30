import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppCard = (props) => {
  return (
    <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 8,
    shadowRadius: 2,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

export default AppCard;
