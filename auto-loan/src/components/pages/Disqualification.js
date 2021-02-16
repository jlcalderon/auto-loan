import React from "react";
import "./Disqualification.css";

const Disqualification = () => {
  return (
    <div className="container-wrapper">
      <div className="row">
        <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
          <img src="../../../img/sad.png" alt="Lorem Ipsum" width="25%"></img>
          <p className="sub-jumbo">
            Thank you for submitting the pre- qualification form, unfortunetly,
            this time you don’t qualify for the loan.
          </p>

          <h1 className="logo">AUTO-LOAN</h1>

          <small>For more information please contact us: 999 999 9999</small>
        </div>
      </div>
    </div>
  );
};

export default Disqualification;
