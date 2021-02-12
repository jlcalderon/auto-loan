import React, { useState, useEffect } from "react"; //importing necesary hooks to work the logic of state changes in this component
import { connect } from "react-redux"; //Importing connect to wire up this component to redux store, reducers and actions
import {
  submitLoanApplication,
  updatePurchasePrice,
  updateAutoMake,
  updateAutoModel,
  updateIncome,
  updateCreditScores,
} from "../../actions"; //Importing the predifined actions of the redux eco system tool
import "./FormApplication.css"; //Importing some styling for this component
import CurrencyInput from "react-currency-input-field"; //This react wrapper validates data type currency/numbers
import { useHistory } from "react-router-dom"; //Move to the next page to let user know about the results of the applications

const FormApplication = ({
  onSubmitLoanFormApplication,
  onChangePurchasePrice,
  onChangeAutoMake,
  onChangeAutoModel,
  onChangeIncome,
  onChangeCreditScore,
}) => {
  const [newApplication, setNewApplication] = useState({}); //Entire payload to submit to the API on actions all the input fields
  const [purchasePrice, setPurchasePrice] = useState(); //Handles the purchase price input field
  const [autoMake, setAutoMake] = useState(""); //Handles the auto make input text field control
  const [autoModel, setAutoModel] = useState(""); //Handles the auto model input text field control
  const [income, setIncome] = useState(); //Handles the income input text field control
  const [creditScore, setCreditScore] = useState(600); //Handles the credit Score input range control
  let history = useHistory();

  //Implementing useEffect hook to watch for changes in newApplication state of this component, to follow up with an update to the redux global state
  useEffect(() => {
    if (JSON.stringify(newApplication) !== "{}") {
      onSubmitLoanFormApplication(newApplication); //Calling the submit form action from the dispatch to props included in this component
      history.push("/myapplication");
    }
  }, [newApplication]); //Wacthing for changes in newApplication state

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //Always a good practice to call preventDefault() first when submitting a form

        setNewApplication({
          data: {
            //Formatting the data into a JSON object as follow:
            auto_purchase_price: parseInt(purchasePrice, 10), //this how provisionally I am assuring the data type is going to be a integer number base 10, later this could be done by implementing Typescript
            auto_make: autoMake, //This default to string because of the initial state in the useState("") line #11
            auto_model: autoModel, //This default to string because of the initial state in the useState("") line #12
            applicant_income: parseInt(income, 10), //this how provisionally I am assuring the data type is going to be a integer number base 10, later this could be done by implementing Typescript
            applicant_credit_score: parseInt(creditScore, 10), //this how provisionally I am assuring the data type is going to be a integer number base 10, later this could be done by implementing Typescript
          },
        });
      }}
    >
      <div className="form-group">
        <CurrencyInput
          id="input-price"
          name="input-price"
          placeholder="Auto Purchase Price"
          defaultValue={purchasePrice}
          groupSeparator=","
          prefix="$"
          onValueChange={(value) => {
            onChangePurchasePrice(value);
            setPurchasePrice(value);
          }}
          className="form-control"
          required //this attribute/prop of HTML5 would not let the users by pass filling this field out. That will avoid a user error of submitting empty blank fields
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Auto Make"
          className="form-control"
          value={autoMake}
          onChange={(event) => {
            onChangeAutoMake(event.target.value);
            setAutoMake(event.target.value);
          }}
          required //this attribute/prop of HTML5 would not let the users by pass filling this field out. That will avoid a user error of submitting empty blank fields
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Auto Model"
          className="form-control"
          value={autoModel}
          onChange={(event) => {
            onChangeAutoModel(event.target.value);
            setAutoModel(event.target.value);
          }}
          required //this attribute/prop of HTML5 would not let the users by pass filling this field out. That will avoid a user error of submitting empty blank fields
        />
      </div>
      <div className="form-group">
        <CurrencyInput
          id="input-income"
          name="input-income"
          placeholder="My Estimated Yearly Income"
          defaultValue={income}
          groupSeparator=","
          prefix="$"
          onValueChange={(value) => {
            onChangeIncome({
              data: {
                income: value,
                price: purchasePrice,
              },
            });
            setIncome(value);
          }}
          className="form-control"
          required //this attribute/prop of HTML5 would not let the users by pass filling this field out. That will avoid a user error of submitting empty blank fields
        />
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <input
              type="range"
              min="0"
              max="850"
              value={creditScore}
              step="50"
              list="tickmarks"
              className="credit-scores-range"
              onChange={(event) => {
                onChangeCreditScore(event.target.value);
                setCreditScore(event.target.value);
              }}
              required //this attribute/prop of HTML5 would not let the users by pass filling this field out. That will avoid a user error of submitting empty blank fields
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
  //This const will default to null in the first argument of the connect high order function
  /* loanApplication: state.loanApplication,
  uiHints: state.uiHints,
  updatedPurchasePrice: state.updatedPurchasePrice, */
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitLoanFormApplication: (data) => dispatch(submitLoanApplication(data)),
  onChangePurchasePrice: (price) => dispatch(updatePurchasePrice(price)),
  onChangeAutoMake: (data) => dispatch(updateAutoMake(data)),
  onChangeAutoModel: (data) => dispatch(updateAutoModel(data)),
  onChangeIncome: (data) => dispatch(updateIncome(data)),
  onChangeCreditScore: (credit) => dispatch(updateCreditScores(credit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormApplication); //Conecting and exporting component
