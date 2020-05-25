import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { THEME } from "../theme";

const TodoScreen = ({ todo, goBack }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="Back"
            color={THEME.COLORS.INFO_COLOR}
            onPress={goBack}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Remove"
            color={THEME.COLORS.DANGER_COLOR}
            onPress={goBack}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
});

export default TodoScreen;
