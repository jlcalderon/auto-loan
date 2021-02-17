import React from "react";
import "./Registration.css";
import FormRegistration from "../FormRegistration";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Registration = () => {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Registration;
