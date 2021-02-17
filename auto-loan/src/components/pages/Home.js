import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import FormApplication from "../FormApplication";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Home = () => {
  const uiHints = useSelector((state) => state.autoLoanApplication.uiHints);
  return (
    <div>
      <Navbar />
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
            <div className="form-wrapper">
              <div className="forms">
                <p>
                  See if you qualify.! Please, submit this form to verify your
                  eligibility.
                </p>
                <FormApplication />
                <div className="msg-box">
                  <hr />
                  <p>{uiHints}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
