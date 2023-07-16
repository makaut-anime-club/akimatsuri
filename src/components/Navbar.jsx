import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid space-bw">
        <a className="navbar-brand" href="#">
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtdbald_ZCkvT2lRRQndb2KlgRdvqqH1gwknJspqxUFC2g=s96-c-rg-br100"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stalls" className="nav-link">
                Stalls
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
