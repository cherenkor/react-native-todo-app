import React, { useState } from "react";
import { View, StyleSheet, Alert, TextInput, Keyboard } from "react-native";
import { THEME } from "../theme";
import { AntDesign } from "@expo/vector-icons";

export const AddTodo = ({ addTodo, todos }) => {
  const [value, setValue] = useState("");
  const todoExists = (title) => todos.some((todo) => title === todo.title);
  const pressHandler = () => {
    if (!value.trim()) {
      return Alert.alert(`Title can not be empty`);
    }

    if (todoExists(value)) {
      return Alert.alert(`Todo with this title already added`);
    }

    addTodo(value);
    setValue("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Enter todo title"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <AntDesign.Button
        name="pluscircleo"
        style={styles.button}
        onPress={pressHandler}
      >
        Add
      </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  textInput: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.PRIMARY_COLOR,
  },
  button: {
    backgroundColor: THEME.COLORS.SUCCESS_COLOR,
  },
});
