import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="top-navigation">
      <nav className="navbar navbar-expand-lg navbar-dark navigation">
        <Link to="/" className="navbar-brand logo">
          AUTO-LOAN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Loan Application
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
