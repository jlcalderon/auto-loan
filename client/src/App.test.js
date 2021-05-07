import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

test("Renders the App landing page with initial state", () => {
  //Mock all initial state
  const initialState = {
    autoLoanApplication: {
      loanApplication: {},
      uiHints:
        "Hi there! I will be here to help you fill out your loan pre qualification form", //Help users by displaying message when they are wrong or rigth typing the info in the form
      updatedPurchasePrice: 0,
      autoMake: "",
      autoModel: "",
      userEstimatedIncome: 0,
      userCreditScore: 600,
      flags: 0,
    },
    autoLoanApplicationResults: {
      applicationResults: {},
    },
  };
  const mockStore = configureStore();

  //Render the app wrapped in the context provider with the store of the mocked state
  render(
    <Provider store={mockStore(initialState)}>
      <App />
    </Provider>
  );
  //Assert wheater the labelElement text was found in the document
  const uiHintsText = screen.getByText(
    initialState.autoLoanApplication.uiHints
  );
  expect(uiHintsText).toBeInTheDocument();
});
