import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types";

const handlers = {
  DEFAULT: (state) => state,
  [ADD_TODO]: (state, { title }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: Date.now().toString(),
        title,
      },
    ],
  }),
  [UPDATE_TODO]: (state, { title, id }) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }

      return todo;
    }),
  }),
  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }),
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
