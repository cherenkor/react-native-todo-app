import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Todo } from "./Todo";

export const TodoList = ({ todos, removeTodo, setTodoId }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} removeTodo={removeTodo} setTodoId={setTodoId} />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

const styles = StyleSheet.create({
  block: {},
});
