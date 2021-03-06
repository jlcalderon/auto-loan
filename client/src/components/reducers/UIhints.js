import { UPDATE_MSG } from "../actions/UIhints";

const initialState = {
  msg:
    "Hi there! I will be here to help you fill out your loan pre qualification form",
};

export const uiHints = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_MSG: {
      const msg = payload;
      return { ...state, msg };
    }
    default:
      return state;
  }
};
