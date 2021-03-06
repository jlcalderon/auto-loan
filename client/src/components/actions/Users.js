export const SUBMIT_REGISTRATION_FORM = "SUBMIT_REGISTRATION_FORM";

export const submitRegistrationForm = (data) => ({
  type: SUBMIT_REGISTRATION_FORM,
  payload: data,
});
