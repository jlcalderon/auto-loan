export const SUBMIT_LOAN_APPLICATION = "SUBMIT_LOAN_APPLICATION";
export const UPDATE_CREDIT_SCORES = "UPDATE_CREDIT_SCORES";

export const submitLoanApplication = (data) => ({
  type: SUBMIT_LOAN_APPLICATION,
  payload: data,
});

export const updateCreditScores = (scores) => ({
  type: UPDATE_CREDIT_SCORES,
  payload: scores,
});
