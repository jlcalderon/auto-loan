import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./ApplicationResults.css";
import FormRegistration from "./component/FormRegistration";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const ApplicationReults = () => {
  const [apiResponse, setApiResponse] = useState({});
  const uiHints = useSelector((state) => state.autoLoanApplication.uiHints);
  let history = useHistory();

  useEffect(() => {
    //API call here
    /*fetch("/api/prequalification",
      method: "POST",
      body: newApplication,
      type: "Application/JSON",
      ); */
    /** setApiResponse(whatever the fetch return is)*/
  }, []); //Execute when component did mount

  return (
    <div>
      <Navbar />
      <div className="container" style={{ margin: "20px" }}>
        <h1 className="sub-jumbo">{uiHints}</h1>
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
