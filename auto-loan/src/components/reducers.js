import { SUBMIT_LOAN_APPLICATION, UPDATE_CREDIT_SCORES } from "./actions";
export const autoLoanApplication = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBMIT_LOAN_APPLICATION: {
      const { data } = payload;
      const newLoanApplication = {
        data,
      };
      return { ...state, newLoanApplication };
    }
    case UPDATE_CREDIT_SCORES: {
      const { scores } = payload;
      const updatedCreditScores = {
        scores,
      };
      return { ...state, updatedCreditScores };
    }
    default:
      return state;
  }
};
