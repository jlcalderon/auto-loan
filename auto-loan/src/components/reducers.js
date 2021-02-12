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
      let uiHints = initialState.uiHints;
      if (JSON.stringify(loanApplication) !== "{}") {
        //Compared to the stringfy version of an empty JSON object, because the object loanaplication is always a thruty value so this: !loanApplication would not do the check.
        //Check if the json object from the component state has data in it to set uiHints properly
        uiHints = "Your application was submitted correctly";
      }

      return { ...state, uiHints, loanApplication };
    }
    case UPDATE_PURCHASE_PRICE: {
      const updatedPurchasePrice = payload;
      let uiHints = "";
      if (updatedPurchasePrice > 1000000) {
        uiHints =
          "Your purchase price is above $1,000,000 you might not be elegible";
      } else if (updatedPurchasePrice <= 0) {
        uiHints = "Make sure the purchase price is correct";
      } else {
        uiHints =
          "Tip 1: Purchase price above $1,000,000 might make you not elegible for a loan";
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
