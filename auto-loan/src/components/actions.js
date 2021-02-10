export const SUBMIT_LOAN_APPLICATION = "SUBMIT_LOAN_APPLICATION";
export const UPDATE_PURCHASE_PRICE = "UPDATE_PURCHASE_PRICE";
export const UPDATE_CREDIT_SCORES = "UPDATE_CREDIT_SCORES";

export const submitLoanApplication = (data) => ({
  type: SUBMIT_LOAN_APPLICATION,
  payload: data,
});

export const updatePurchasePrice = (price) => ({
  type: UPDATE_PURCHASE_PRICE,
  payload: price,
});

export const updateCreditScores = (scores) => ({
  type: UPDATE_CREDIT_SCORES,
  payload: scores,
});
