import { CHANGE_SCREEN } from "../types";

const handlers = {
  DEFAULT: (state) => state,
  [CHANGE_SCREEN]: (state, payload) => payload,
};

export const screenReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};
