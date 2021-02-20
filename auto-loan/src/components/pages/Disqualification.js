import React from "react";
import { useSelector } from "react-redux";
import "./Disqualification.css";
//Here import useSelector from redux

const Disqualification = () => {
  //Here useSelector to grab API response from store
  const apiResponse = useSelector(
    (state) => state.autoLoanApplicationResults.applicationResults
  );

  return (
    <div className="full-width">
      <div className="container-wrapper">
        <div className="row">
          <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
            <img src="../../../img/sad.png" alt="Lorem Ipsum" width="25%"></img>
            <h1 className="sub-jumbo" style={{ marginTop: "20px" }}>
              Thank you for submitting the pre-qualification form
            </h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
            <p>HTTP Request Status Code: {apiResponse.code}</p>
            <h1 className="sub-jumbo">{apiResponse.title}</h1>
            <p>{apiResponse.body}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
            <h1 className="logo">AUTO-LOAN</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disqualification;
