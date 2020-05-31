import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Dimensions } from "react-native";
import { Todo } from "./Todo";
import { THEME } from "../theme";

export const TodoList = ({ todos, removeTodo, setTodoId }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - THEME.SPACES.PADDING_HORIZONTAL * 2
  );

  useEffect(() => {
    const updateWidth = () => {
      setDeviceWidth(
        Dimensions.get("window").width - THEME.SPACES.PADDING_HORIZONTAL * 2
      );
    };

    Dimensions.addEventListener("change", updateWidth);

    return () => {
      Dimensions.removeEventListener("change", updateWidth);
    };
  });

  return (
    <FlatList
      style={{ width: deviceWidth }}
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} removeTodo={removeTodo} setTodoId={setTodoId} />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

const styles = StyleSheet.create({});
