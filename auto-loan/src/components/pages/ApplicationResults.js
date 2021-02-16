import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";
import "./ApplicationResults.css";
//import FormRegistration from "./component/FormRegistration";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const ApplicationReults = () => {
  const uiHints = useSelector((state) => state.autoLoanApplication.uiHints);
  const flags = useSelector((state) => state.autoLoanApplication.flags);

  //let history = useHistory();
  const [responseAPI, setResponseAPI] = useState({});

  useEffect(() => {
    //This code is meant to serve as a mock fetch from an API.
    if (flags === 2 || flags === 4 || flags === 5 || flags === 6) {
      new Promise(function (resolve) {
        setTimeout(() => {
          resolve({
            title: "Bad Request",
            body:
              "Client error, you must submited an empty request to the server or make sure the purchase price is greater than 0 or your credit score might not be elegible for the loan",
            code: 400, //http request status code
          });
        }, 1000);
      }).then((res) => {
        setResponseAPI(res);
      });
    }
  }, []); //Execute when component did mount

  return (
    <div>
      <Navbar />
      <div className="container" style={{ margin: "20px" }}>
        <h1 className="sub-jumbo">{uiHints}</h1>
        <p> {responseAPI.title} </p>
        <p> {responseAPI.body} </p>
        <p> {responseAPI.code} </p>
        {/* Conditional rendering */}
        {/* if apiResponse positive */
        /* <div className="container-wrapper">
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
                </div>*/}
        {/* if apiResponse negative*/
        /* history.push("/disqualification"); */}
        {/*if apiResponse is a bad request status code*/
        /* <h1>BAD REQUEST</h1>*/
        /* <div> {msg} </div>*/
        /** <div>Contact</div> */}
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationReults;
