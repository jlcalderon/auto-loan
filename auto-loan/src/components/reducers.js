import {
  SUBMIT_LOAN_APPLICATION,
  UPDATE_PURCHASE_PRICE,
  UPDATE_AUTO_MAKE,
  UPDATE_AUTO_MODEL,
  UPDATE_INCOME,
  UPDATE_CREDIT_SCORES,
} from "./actions";

const initialState = {
  loanApplication: {},
  uiHints:
    "Hi there! I will be here to help you fill out your loan pre qualification form",
  updatedPurchasePrice: 0,
  autoMake: "",
  autoModel: "",
  userEstimatedIncome: 0,
  userCreditScore: 0,
  flags: 0, //This state prop is intented to handle flags raised by the results of the actions dispatched
  //flags codes:
  /* 1 req submitted with data */
  /* 2 purchase price above 1,000,000 not elegible for loan*/
  /* 3 income is lower than a purchase price */
  /* 4 purchase price is greater than a 1/5th of income */
  /* 5 bad request data object in blank or purchase price <= 0*/
  /* 6 bad request credit scores are lower than 600 */
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
        uiHints = "Thank you for submitting your loan pre-qualification form";
      }

      return { ...state, uiHints, loanApplication };
    }
    case UPDATE_PURCHASE_PRICE: {
      const updatedPurchasePrice = payload;
      let uiHints = "";
      let flags = initialState.flags;
      if (updatedPurchasePrice > 1000000) {
        uiHints =
          "Your purchase price is above $1,000,000 please correct the auto purchase price field";
        flags = 2;
      } else if (updatedPurchasePrice <= 0) {
        uiHints = "Make sure the purchase price is correct";
        flags = 5;
      } else {
        uiHints =
          "Tip 1: Purchase price above $1,000,000 might make you not elegible for a loan";
        flags = 1;
      }
      return { ...state, uiHints, flags, updatedPurchasePrice };
    }

    case UPDATE_AUTO_MAKE: {
      const autoMake = payload;
      let uiHints =
        "Tip 2: Our clients top auto make selections are: Toyota, Ford, Chevrolet, Jeep, Honda";
      return { ...state, uiHints, autoMake };
    }

    case UPDATE_AUTO_MODEL: {
      const autoModel = payload;
      let uiHints = `Tip 3: Make sure the model you are typing now is especific to the auto make that you previously typed`;
      return { ...state, uiHints, autoModel };
    }

    case UPDATE_INCOME: {
      const { data } = payload;
      let uiHints = ``;
      const userEstimatedIncome = {
        data,
      };
      let flags = initialState.flags;
      if (
        userEstimatedIncome.data.price >
        parseInt(userEstimatedIncome.data.income / 5, 10)
      ) {
        uiHints = `You might not be elegible with this income, please verify that the purchase price is not more than 1/5th of your income`;
        flags = 4;
      } else if (
        userEstimatedIncome.data.price <=
        parseInt(userEstimatedIncome.data.income / 5, 10)
      ) {
        uiHints = `Your income would help your application stand out, way to go.`;
        flags = 1;
      } else {
        uiHints = `Tip 4: Your estimated yearly income must be greater than the purchase price typed above`;
      }
      return { ...state, uiHints, flags, userEstimatedIncome };
    }

    case UPDATE_CREDIT_SCORES: {
      const userCreditScore = payload;
      let uiHints = ``;
      let flags = initialState.flags;
      if (userCreditScore >= 600) {
        uiHints = "Your credit scores look good!";
        flags = 1;
      } else if (userCreditScore < 600) {
        uiHints = "Tip 5: Your credit scores must be at least 600 pts or more.";
        flags = 6;
      }
      return { ...state, uiHints, flags, userCreditScore };
    }
    default:
      return state;
  }
};
