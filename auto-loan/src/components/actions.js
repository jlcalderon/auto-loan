export const SUBMIT_LOAN_APPLICATION = "SUBMIT_LOAN_APPLICATION";
export const UPDATE_PURCHASE_PRICE = "UPDATE_PURCHASE_PRICE";
export const UPDATE_AUTO_MAKE = "UPDATE_AUTO_MAKE";
export const UPDATE_AUTO_MODEL = "UPDATE_AUTO_MODEL";
export const UPDATE_INCOME = "UPDATE_INCOME";
export const UPDATE_CREDIT_SCORES = "UPDATE_CREDIT_SCORES";

export const submitLoanApplication = (data) => ({
  type: SUBMIT_LOAN_APPLICATION,
  payload: data,
});

export const updatePurchasePrice = (price) => ({
  type: UPDATE_PURCHASE_PRICE,
  payload: price,
});

export const updateAutoMake = (data) => ({
  type: UPDATE_AUTO_MAKE,
  payload: data,
});

export const updateAutoModel = (data) => ({
  type: UPDATE_AUTO_MODEL,
  payload: data,
});

export const updateIncome = (income) => ({
  type: UPDATE_INCOME,
  payload: income,
});

export const updateCreditScores = (scores) => ({
  type: UPDATE_CREDIT_SCORES,
  payload: scores,
});
