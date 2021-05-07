import configureStore from "redux-mock-store";

test("Dispatch action of SUBMIT_LOAN_APPLICATION correctly", () => {
  //Mock an autoLoanApplication state object
  const data = {
    autoLoanApplication: {
      loanApplication: {},
      uiHints: "Thank you for submitting your loan pre-qualification form",
      updatedPurchasePrice: 15000,
      autoMake: "Toyota",
      autoModel: "RAV4",
      userEstimatedIncome: 95000,
      userCreditScore: 650,
      flags: 1,
    },
  };

  const expectedAction = [
    {
      type: "SUBMIT_LOAN_APPLICATION",
      payload: data,
    },
  ];

  const mockStore = configureStore();
  const store = mockStore(data);

  store.dispatch({ type: "SUBMIT_LOAN_APPLICATION", payload: data });

  expect(store.getActions()).toEqual(expectedAction);
});
