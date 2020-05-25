import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TodoScreen = ({ todo, goBack }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodoScreen;
