import { STORE_API_RESPONSE } from "../actions/ApplicationResults";

const initialState = {
  applicationResults: {},
};

export const autoLoanApplicationResults = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case STORE_API_RESPONSE: {
      const applicationResults = payload;
      return { ...state, applicationResults };
    }
    default:
      return state;
  }
};
