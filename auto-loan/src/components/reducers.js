import { SUBMIT_LOAN_APPLICATION } from "./actions";
export const autoLoanApplication = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBMIT_LOAN_APPLICATION: {
      const { data } = payload;
      const newLoanApplication = {
        data,
      };
      return (state = newLoanApplication);
    }
    default:
      return state;
  }
};
