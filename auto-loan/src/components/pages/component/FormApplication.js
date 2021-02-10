import React, { useState } from "react";
import { connect } from "react-redux";
import { submitLoanApplication } from "../../actions"; //Importing the predifined actions of the redux eco system tool
import "./FormApplication.css";
const FormApplication = ({ onSubmitLoanFormApplication }) => {
  const [newApplication, setNewApplication] = useState({}); //Entire payload to submit to the API on actions all the input fields
  const [uiHints, setUiHints] = useState(""); //This state is intented to display some info to the user at the time they are filling out the form
  const [purchasePrice, setPurchasePrice] = useState(); //Handles the purchase price input field
  const [autoMake, setAutoMake] = useState(""); //Handles the auto make input text field control
  const [autoModel, setAutoModel] = useState(""); //Handles the auto model input text field control
  const [income, setIncome] = useState(); //Handles the income input text field control
  const [creditScore, setCreditScore] = useState(300); //Handles the credit Score input range control

  return (
    <form>
      <div className="msg-box">
        <p>{uiHints}</p>
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Auto Purchase Price"
          className="form-control"
          value={purchasePrice}
          onChange={(event) => {
            if (event.target.value > 100000) {
              setUiHints("The auto price seems to be more than the usual");
            } else {
              setUiHints("");
              setPurchasePrice(event.target.value);
            }
          }}
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
            />
            <datalist id="tickmarks" className="tickmarks">
              <option value="0" label="0%"></option>
              <option value="100"></option>
              <option value="200"></option>
              <option value="300"></option>
              <option value="400"></option>
              <option value="500" label="50%"></option>
              <option value="600"></option>
              <option value="700"></option>
              <option value="800"></option>
              <option value="900"></option>
              <option value="1000" label="100%"></option>
            </datalist>
          </div>
        </div>
        <div className="col">
          <h1 className="jumbo-scores">{creditScore} Pts</h1>
        </div>
      </div>
      <div className="form-group">
        <button
          onClick={(event) => {
            event.preventDefault();
            setNewApplication({
              data: {
                auto_purchase_price: purchasePrice,
                auto_make: autoMake,
                auto_model: autoModel,
                applicant_income: income,
                applicant_credit_score: creditScore,
              },
            });
            console.log(newApplication);
            onSubmitLoanFormApplication(newApplication);
            //setNewApplication({});
          }}
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

/* const mapStateToProps = (state) => ({
  autoLoanApplication: state.autoLoanApplication,
}); */
const mapDispatchToProps = (dispatch) => ({
  onSubmitLoanFormApplication: (data) => dispatch(submitLoanApplication(data)),
});

export default connect(null, mapDispatchToProps)(FormApplication);
