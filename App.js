import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";
import { todos as todoMocks } from "./src/mocks";

export default function App() {
  const [todoId, setTodoId] = useState();
  const [todos, setTodos] = useState(todoMocks);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      setTodoId={setTodoId}
      removeTodo={removeTodo}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find(({ id }) => id === todoId);
    content = <TodoScreen todo={selectedTodo} goBack={() => setTodoId(null)} />;
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
