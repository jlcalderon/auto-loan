import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Home.css";
import FormApplication from "../FormApplication";
import Navbar from "../Navbar";

const Home = () => {
  const uiHints = useSelector((state) => state.autoLoanApplication.uiHints);
  const applicationResults = useSelector(
    (state) => state.autoLoanApplicationResults.applicationResults
  );
  let history = useHistory();
  return (
    <div className="full-width">
      <Navbar />
      {JSON.stringify(applicationResults) === "{}" ? (
        <div className="container-wrapper">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-8 col-xl-6">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <h1 className="jumbo">Getting a loan for your car</h1>
                  <h3 className="sub-jumbo">was never this easy.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <img
                    src="../../../img/img1.jpg"
                    alt="Lorem Ipsum"
                    width="100%"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <h1 className="sub-jumbo">
                Step 1: Fill out the auto loan application
              </h1>
              <div className="form-wrapper">
                <div className="forms">
                  <p>
                    See if you qualify.! Please, submit this form to verify your
                    eligibility.
                  </p>
                  <FormApplication />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        history.push("/myapplication")
      )}
      <div id="notifications" className="uiHints">
        {`${uiHints} `}
        <span
          onClick={() => {
            document
              .getElementById("notifications")
              .classList.remove("uiHints");
            document
              .getElementById("notifications")
              .classList.add("hideUiHints");
          }}
          style={{
            margin: "250px",
            padding: "10px",
            backgroundColor: "#7e002a",
            fontStyle: "italic",
            fontSize: "18px",
            color: "#ffffff",
            borderRadius: "5px",
          }}
        >
          x
        </span>
      </div>
    </div>
  );
};

export default Home;
