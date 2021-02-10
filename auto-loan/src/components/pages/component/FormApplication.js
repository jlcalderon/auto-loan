import React, { useState } from "react";
import { connect } from "react-redux";
import { submitLoanApplication, updatePurchasePrice } from "../../actions"; //Importing the predifined actions of the redux eco system tool
import "./FormApplication.css";
const FormApplication = ({
  onSubmitLoanFormApplication,
  onChangePurchasePrice,
}) => {
  const [newApplication, setNewApplication] = useState({}); //Entire payload to submit to the API on actions all the input fields
  const [purchasePrice, setPurchasePrice] = useState(); //Handles the purchase price input field
  const [autoMake, setAutoMake] = useState(""); //Handles the auto make input text field control
  const [autoModel, setAutoModel] = useState(""); //Handles the auto model input text field control
  const [income, setIncome] = useState(); //Handles the income input text field control
  const [creditScore, setCreditScore] = useState(300); //Handles the credit Score input range control
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setNewApplication({
          data: {
            auto_purchase_price: parseInt(purchasePrice, 10),
            auto_make: autoMake,
            auto_model: autoModel,
            applicant_income: parseInt(income, 10),
            applicant_credit_score: parseInt(creditScore, 10),
          },
        });
        console.log(newApplication);
        onSubmitLoanFormApplication(newApplication);
      }}
    >
      <div className="form-group">
        <input
          type="text"
          placeholder="Auto Purchase Price"
          className="form-control"
          value={purchasePrice}
          onChange={(event) => {
            onChangePurchasePrice(event.target.value);
            setPurchasePrice(event.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Auto Make"
          className="form-control"
          value={autoMake}
          onChange={(event) => {
            setAutoMake(event.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Auto Model"
          className="form-control"
          value={autoModel}
          onChange={(event) => {
            setAutoModel(event.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="My Estimated Yearly Income"
          className="form-control"
          value={income}
          onChange={(event) => {
            setIncome(event.target.value);
          }}
          required
        />
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <input
              type="range"
              min="0"
              max="1000"
              value={creditScore}
              step="100"
              list="tickmarks"
              className="credit-scores-range"
              onChange={(event) => {
                setCreditScore(event.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="col">
          <h1 className="jumbo-scores">{creditScore} Pts</h1>
        </div>
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-success"
          style={{
            backgroundColor: "#28833e",
            color: "#ffffff",
            borderRadius: "20px",
            width: "100%",
          }}
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  /* loanApplication: state.loanApplication,
  uiHints: state.uiHints,
  updatedPurchasePrice: state.updatedPurchasePrice, */
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitLoanFormApplication: (data) => dispatch(submitLoanApplication(data)),
  onChangePurchasePrice: (price) => dispatch(updatePurchasePrice(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormApplication);
