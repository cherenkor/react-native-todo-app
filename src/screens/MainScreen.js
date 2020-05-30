import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";

const MainScreen = ({ todos, addTodo, removeTodo, setTodoId }) => {
  let content = (
    <TodoList todos={todos} removeTodo={removeTodo} setTodoId={setTodoId} />
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          source={require("../../assets/no-items.png")}
        />
      </View>
    );
  }

  return (
    <View>
      <AddTodo todos={todos} addTodo={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    padding: 10,
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
});

export default MainScreen;
