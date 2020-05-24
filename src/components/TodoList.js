import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Todo } from "./Todo";

export const TodoList = ({ todos, onRemove }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo todo={item} onRemove={onRemove} />}
      keyExtractor={({ id }) => id}
    />
  );
};

const styles = StyleSheet.create({
  block: {},
});
