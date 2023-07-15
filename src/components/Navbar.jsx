import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: 'black', color: 'white'}}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtdbald_ZCkvT2lRRQndb2KlgRdvqqH1gwknJspqxUFC2g=s96-c-rg-br100"
            alt="Logo"
            width="40"
            height="40"
            class="d-inline-block align-text-top"
          />
          
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link" >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/events" class="nav-link">
                Events
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/stalls" class="nav-link">
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
