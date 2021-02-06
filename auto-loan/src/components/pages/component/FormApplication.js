import React from "react";
import "./FormApplication.css";
const FormApplication = () => {
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          placeholder="Auto Purchase Price"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Auto Make" className="form-control" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Auto Model" className="form-control" />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="My Estimated Yearly Income"
          className="form-control"
        />
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <input
              type="range"
              min="0"
              max="1000"
              step="100"
              list="tickmarks"
              className="credit-scores-range"
            />
            <datalist id="tickmarks" className="tickmarks">
              <option value="0" label="0%"></option>
              <option value="100"></option>
              <option value="200"></option>
              <option value="300"></option>
              <option value="400"></option>
              <option value="500" label="50%"></option>
              <option value="600"></option>
              <option value="700"></option>
              <option value="800"></option>
              <option value="900"></option>
              <option value="1000" label="100%"></option>
            </datalist>
          </div>
        </div>
        <div className="col">
          <h1 className="jumbo-scores">100{} Pts</h1>
        </div>
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
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default FormApplication;
