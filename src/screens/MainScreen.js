import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

const MainScreen = () => {
  const { todos, addTodo, removeTodo } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  let content = (
    <TodoList todos={todos} removeTodo={removeTodo} setTodoId={changeScreen} />
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
