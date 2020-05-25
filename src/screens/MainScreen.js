import React from "react";
import { View, StyleSheet } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";

const MainScreen = ({ todos, addTodo, removeTodo, setTodoId }) => {
  return (
    <View>
      <AddTodo todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} setTodoId={setTodoId} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
