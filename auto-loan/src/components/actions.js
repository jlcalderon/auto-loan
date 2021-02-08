export const SUBMIT_LOAN_APPLICATION = "SUBMIT_LOAN_APPLICATION";
export const submitLoanApplication = (data) => ({
  type: SUBMIT_LOAN_APPLICATION,
  payload: { data },
});
