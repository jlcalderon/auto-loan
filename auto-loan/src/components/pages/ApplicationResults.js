import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./ApplicationResults.css";
import FormRegistration from "../FormRegistration";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ApplicationReults = () => {
  const uiHints = useSelector((state) => state.autoLoanApplication.uiHints);
  const flags = useSelector((state) => state.autoLoanApplication.flags);
  //flags codes:
  /* 1 Data of price, income and credit are correct  */
  /* 2 Purchase price above 1,000,000 not elegible for loan BAD REQUEST*/
  /* 3 Income is lower than a purchase price */
  /* 4 Purchase price is greater than a 1/5th of income */
  /* 5 Purchase price is 0 or purchase price < 0 BAD REQUEST*/
  /* 6 Credit scores are lower than 600*/
  /* 7 Credit scores are ok but price is greater than 1/5th fo the income */

  let history = useHistory();
  const [responseAPI, setResponseAPI] = useState({});

  useEffect(() => {
    /* And here I am using the flags logic to resolve a response according to what the user pre-qualification results should be */
    if (flags === 2 || flags === 5) {
      //Handle bad request
      //This code is meant to serve as a mock fetch from an API.
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "BAD REQUEST",
            body:
              "Client error, purchase price 0 or purchase price greater than 1,000,000 will default to not be elegible for the loan. Please contact us for more information: 999 999 9999",
            code: 400, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
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
      });
    }

    if (flags === 3 || flags === 4) {
      //Handle income issues with the request
      //This code is meant to serve as a mock fetch from an API.
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "There is an issue with your income",
            body:
              "Unfortunetely, you are not eligible for a loan to make your auto purchase due the purchase price you are appling for. Please contact us for more information: 999 999 9999",
            code: 201, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
      });
    }

    if (flags === 7) {
      //Request with credit scores ok but price is not
      //This code is meant to serve as a mock fetch from an API.
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "There is an issue with your application",
            body:
              "Unfortunetely, you are not eligible for a loan to make your auto purchase. Your credit scores are ok but your purchse price is greater than 1/5th of your income. Please contact us for more information: 999 999 9999",
            code: 201, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
      });
    }
    if (flags === 6) {
      //Handle request with with lowe credit scores
      //This code is meant to serve as a mock fetch from an API.
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "There is an issue with your application",
            body:
              "Unfortunetely, you are not eligible for a loan to make your auto purchase. Your credit scores are lower than 600. Please contact us for more information: 999 999 9999",
            code: 201, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
      });
    }

    /* In a real world situation here we would make a fetch, axios.get, or ajax.get request instead of the function and logic above */
  });
  const resStatusCode = responseAPI.code;

  return (
    <div>
      <Navbar />
      <div className="container" style={{ margin: "20px" }}>
        <h1 className="sub-jumbo">{uiHints}</h1>
        {/* Conditional rendering */}
        {resStatusCode === 200 ? ( //apiResponse positive
          <div className="container-wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
            </div>
            <div className="row">
              <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
                <h1 className="sub-jumbo">Create Your Account</h1>
                <div className="form-wrapper">
                  <div className="forms">
                    <FormRegistration />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* if apiResponse negative*/}
        {resStatusCode === 201 ? history.push("/disqualification") : null}

        {/*if apiResponse is a bad request status code*/}
        {resStatusCode === 400 ? (
          <div>
            <p> {responseAPI.title} </p>
            <p> {responseAPI.body} </p>
            <p> {responseAPI.code} </p>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationReults;