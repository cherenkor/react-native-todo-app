import React, { useContext, useReducer } from "react";
import { Alert } from "react-native";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import { todos } from "../../mocks";
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types";
import { ScreenContext } from "../screen/screenContext";

export const TodoState = ({ children }) => {
  const initialState = { todos };
  const { todoId, changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (title) => dispatch({ type: ADD_TODO, title });
  const updateTodo = ({ id, title }) =>
    dispatch({ type: UPDATE_TODO, id, title });
  const removeTodo = (id) => {
    const { title } = state.todos.find((t) => t.id === id);

    Alert.alert(
      "Delete",
      `Do you want to delete todo: '${title}'?`,
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        selectedTodo: state.todos.find(({ id }) => id === todoId),
        addTodo,
        updateTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
