import React, { useEffect, useState } from "react";
import "./Disqualification.css";
//Here import useSelector from redux

const Disqualification = () => {
  const [apiResponse, setResponseAPI] = useState({});

  //Here useSelector to grab API response and set it up to a state variable

  //Here temporary mocking waht the useSelector will do
  useEffect(() => {
    setResponseAPI({
      title: "There is an issue with your application",
      body:
        "Unfortunetely, you are not eligible for a loan to make your auto purchase. Your credit scores are lower than 600. Please contact us for more information: 999 999 9999",
      code: 201, //http request status code
    });
  }, []);

  return (
    <div className="container-wrapper">
      <div className="row">
        <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
          <img src="../../../img/sad.png" alt="Lorem Ipsum" width="25%"></img>
          <h1 className="sub-jumbo">
            Thank you for submitting the pre-qualification form
          </h1>
        </div>
      </div>
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
          <h5>HTTP Request Status Code: {apiResponse.code}</h5>
          <h5>{apiResponse.title}</h5>
          <p>{apiResponse.body}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 offset-md-4 col-md-4 offset-lg-4 col-lg-4 offset-xl-4 col-xl-4">
          <h1 className="logo">AUTO-LOAN</h1>
        </div>
      </div>
    </div>
  );
};

export default Disqualification;
