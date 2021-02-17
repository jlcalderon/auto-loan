import React from "react";
import "./FormRegistration.css";

const FormRegistration = () => {
  return (
    <form>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="User email address"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Type your password"
        />
        <small>
          Password must be at least 8 characters long and include 1 numeric
          character and 1 capital letter.
        </small>
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm your password"
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-success"
          style={{
            backgroundColor: "#28833e",
            color: "#ffffff",
            borderRadius: "20px",
            width: "100%",
          }}
        >
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default FormRegistration;
