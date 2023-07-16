import React from "react";
import {FaInstagramSquare as Instagram} from "react-icons/fa"
import {BsDiscord as Discord} from "react-icons/bs"
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTtdbald_ZCkvT2lRRQndb2KlgRdvqqH1gwknJspqxUFC2g=s96-c-rg-br100"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stalls">Stalls</Link>
            </li>

          </ul>
          <form className="d-flex" role="link">
            <a href="https://www.instagram.com/makaut_animeclub" style={{marginRight:'1.5rem'}}><Instagram size={42}/></a>
            <a href="https://discord.gg/F4GyEkFTxN" style={{marginRight:'1.5rem'}}><Discord size={42}/></a>
          </form>
        </div>
      </div>
    </nav>

    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link to="/" className="nav-link" aria-current="page">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/about" className="nav-link" >
    //             About
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/events" className="nav-link">
    //             Events
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/stalls" className="nav-link">
    //             Stalls
    //           </Link>
    //         </li>
    //       </ul>
    //       <form className="d-flex">
    //                     {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
    //                     <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
    //                     <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign up</Link>
    //                 </form>
    //     </div>
    //   </div>
    // </nav>

  );
};

export default Navbar;
