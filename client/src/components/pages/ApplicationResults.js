import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./ApplicationResults.css";
import FormRegistration from "../FormRegistration";
import Navbar from "../Navbar";

const ApplicationReults = () => {
  const uiHints = useSelector((state) => state.uiHints.msg);
  const flags = useSelector((state) => state.autoLoanApplication.flags);
  //flags codes:
  /* 1 Data of price, income and credit are correct  */
  /* 2 Purchase price above 1,000,000 not elegible for loan BAD REQUEST*/
  /* 3 Income is lower than a purchase price or price is greater than a 1/5th of income */
  /* 4 Purchase price is 0 or purchase price < 0 BAD REQUEST*/
  /* 5 Credit scores are lower than 600*/
  /* 6 Credit scores are ok but price is greater than 1/5th fo the income */

  let history = useHistory();
  const dispatch = useDispatch();
  const [responseAPI, setResponseAPI] = useState({});

  useEffect(() => {
    /* And here I am using the flags logic to resolve a response according to what the user pre-qualification results should be */
    if (flags === 2 || flags === 4) {
      //Handle bad request
      //This code is meant to serve as a mock fetch from an API.
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "BAD REQUEST",
            body:
              "Client error: The purchase price is equal to 0 or above 1,000,000. Provided that, your application will default to not be elegible for the loan. Please contact us for more information: 999 999 9999",
            code: 400, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
        //Dispatch action to store response in redux global state
        dispatch({ type: "STORE_API_RESPONSE", payload: res });
      });
    }
    //Handle good request
    if (flags === 1) {
      //Positive request everything ok
      //This code is meant to serve as a mock fetch from an API.
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "Congratulations!",
            body: "You are eligible for a loan to make your auto purchase",
            code: 200, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
        //Dispatch action to store response in redux global state
        dispatch({ type: "STORE_API_RESPONSE", payload: res });
      });
    }

    if (flags === 3 || flags === 5) {
      //Handle income issues with the request
      //This code is meant to serve as a mock fetch from an API.
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "There is an issue with your application",
            body:
              "Unfortunately, you are not eligible for a loan to make your auto purchase due the price that you are applying for and your income. Please contact us for more information: 999 999 9999",
            code: 201, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
        //Dispatch action to store response in redux global state
        dispatch({ type: "STORE_API_RESPONSE", payload: res });
      });
    }

    if (flags === 6) {
      //Request with credit scores ok but price is not
      //This code is meant to serve as a mock fetch from an API.
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "There is an issue with your application",
            body:
              "Unfortunately, you are not eligible for a loan to make your auto purchase. Your credit scores are ok but your purchse price is greater than 1/5th of your income. Please contact us for more information: 999 999 9999",
            code: 201, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
        //Dispatch action to store response in redux global state
        dispatch({ type: "STORE_API_RESPONSE", payload: res });
      });
    }
    if (flags === 5) {
      //Handle request with with low credit scores
      //This code is meant to serve as a mock fetch from an API.
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "There is an issue with your application",
            body:
              "Unfortunately, you are not eligible for a loan to make your auto purchase. Your credit scores are lower than 600. Please contact us for more information: 999 999 9999",
            code: 201, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
        //Dispatch action to store response in redux global state
        dispatch({ type: "STORE_API_RESPONSE", payload: res });
      });
    }

    /* In a real world situation here we would make a fetch, axios.get, or ajax.get request instead of the function and logic above */
  }, []);
  const resStatusCode = responseAPI.code;

  return (
    <div className="full-width" style={{ textAlign: "center" }}>
      <Navbar />
      {/* //Notifications */}
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
      {/* Conditional rendering */}
      {resStatusCode === 200 ? ( //apiResponse positive
        <div className="container-wrapper">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h1 className="sub-jumbo">
                Congratulations you qualify for an auto loan!
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
              <h1 className="sub-jumbo">Step 2: Create Your Account</h1>
              <div className="form-wrapper">
                <div className="forms">
                  <FormRegistration />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/*if apiResponse is a bad request status code*/}
      {resStatusCode === 400 ? (
        <div className="container">
          <div
            className="row"
            style={{ marginTop: "45px", textAlign: "center" }}
          >
            <div className="col">
              <h5>HTTP Request Status Code: {responseAPI.code}</h5>
              <h5>{responseAPI.title}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p
                style={{
                  padding: "50px",
                  textAlign: "justify",
                }}
              >
                {responseAPI.body}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* if apiResponse negative*/}
      {resStatusCode === 201 ? history.push("/disqualification") : null}
    </div>
  );
};

export default ApplicationReults;
