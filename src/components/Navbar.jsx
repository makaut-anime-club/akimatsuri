import React, { useState } from "react";
import { FaInstagramSquare as Instagram } from "react-icons/fa"
import { BsDiscord as Discord } from "react-icons/bs"
import { BiHome as HomeIcon } from "react-icons/bi"
import { BsInfoCircle as AboutIcon } from "react-icons/bs"
import { BsCalendarEvent as EventsIcon } from "react-icons/bs"
import { BsShop as StallsIcon } from "react-icons/bs"
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen((state) => !state);
  }
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark sticky-top" data-bs-theme="dark">
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
        <button onClick={toggleNav} className={navOpen ? "navbar-toggler" : "navbar-toggler collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{border: '0px'}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={
          navOpen
            ? "collapse navbar-collapse show"
            : "collapse navbar-collapse"
        } id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link onClick={toggleNav} className="nav-link" aria-current="page" to="/"><HomeIcon className="icon-sp" size={20} /> Home</Link>
            </li>
            <li className="nav-item">
              <Link onClick={toggleNav} className="nav-link" to="/about"><AboutIcon className="icon-sp" size={20} /> About</Link>
            </li>
            <li className="nav-item">
              <Link onClick={toggleNav} className="nav-link" to="/events"><EventsIcon className="icon-sp" size={20} /> Events</Link>
            </li>
            <li className="nav-item">
              <Link onClick={toggleNav} className="nav-link" to="/stalls"><StallsIcon className="icon-sp" size={20} /> Stalls</Link>
            </li>

          </ul>
          <form className="d-flex justify-content-end" role="link">
            <a href="https://www.instagram.com/makaut_animeclub" style={{ marginRight: '1rem' }}><img src="https://cdn.discordapp.com/attachments/1139851071930519562/1139856715446231080/icons8-instagram-48_1.png" width={'100%'}></img></a>
            <a href="https://discord.gg/F4GyEkFTxN" style={{ marginRight: '2rem' }}><img src="https://cdn.discordapp.com/attachments/1139851071930519562/1139856715664339065/icons8-discord-48_1.png" width={'100%'}></img></a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
