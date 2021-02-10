import {
  SUBMIT_LOAN_APPLICATION,
  UPDATE_PURCHASE_PRICE,
  UPDATE_CREDIT_SCORES,
} from "./actions";

const initialState = {
  loanApplication: {},
  uiHints:
    "Hi there! I am Loani I will help you fill out your application form",
  updatedPurchasePrice: 0,
};
export const autoLoanApplication = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SUBMIT_LOAN_APPLICATION: {
      const { data } = payload;
      const loanApplication = {
        data,
      };
      let uiHints = "Your application was submitted correctly";

      return { ...state, uiHints, loanApplication };
    }
    case UPDATE_PURCHASE_PRICE: {
      const updatedPurchasePrice = payload;
      let uiHints = "";
      if (updatedPurchasePrice >= 100000) {
        uiHints =
          "Your purchase price is greater than $99,999 you might not be elegible";
      } else if (updatedPurchasePrice <= 0) {
        uiHints = "Make sure the purchase price is correct";
      } else {
        uiHints =
          "Tip 1: Purchase Price higher than $99,999 might make you not elegible for a loan";
      }
      return { ...state, uiHints, updatedPurchasePrice };
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
