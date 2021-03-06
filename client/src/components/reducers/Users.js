import { SUBMIT_REGISTRATION_FORM } from "../actions/Users";

const initialState = {};

export const userData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBMIT_REGISTRATION_FORM: {
      const user = payload;
      return { ...state, user };
    }
    default:
      return state;
  }
};
