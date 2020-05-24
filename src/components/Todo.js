import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export const Todo = ({ todo, onRemove }) => {
  const onPressHandler = () => {
    Alert.alert("Delete", "Do you want to delete this todo?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Removing"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => onRemove(todo.id),
      },
    ]);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPressHandler}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
