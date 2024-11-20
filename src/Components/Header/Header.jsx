import React, { useState, useRef, useEffect } from "react";
import sign from "../../Images/signature.png";

function Header() {



  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-custom">
        {/* <a className="navbar-brand" href="#">
         Yasindu Bimsara
        </a> */}

        <div className="image-signature">
          <img src={sign} alt="" className="signature" />
        </div>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="header-bg">
        <ul className="icon-ul custom-icons">
          <li className="icon-li">
            <a href="#">
              <i class="fab fa-edge"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-firefox"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-chrome"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-opera"></i>
            </a>
          </li>
        </ul>
      </div>







    </div>
  );
}

export default Header;
