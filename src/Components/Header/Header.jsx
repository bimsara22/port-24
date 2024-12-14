import React, { useState, useRef, useEffect } from "react";
import sign from "../../Images/signature.png";
import man from "../../Images/imgYasindu.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-custom">
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
              <Link className="nav-link" to="/projets">
                Projects
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/skills">
                SKills
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">
                Education
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="header-bg">
        <div className="image-contain">
          <img src={man} alt="yasindu" className="image-yasindu" />
        </div>

        <div class="text-container">
          <h1 className="my-name">Yasindu Bimsara</h1>

          <h1>
            <span class="prefix">I'm </span>
            <div class="message">
              <div class="word1">Developer</div>
              <div class="word2">Ui Ux Engineer</div>
              <div class="word3">Trainer</div>
              <div class="word4">Software Enginner</div>
            </div>
          </h1>

          <p className="description-title">
            cannot provide a valid href, but still need the element to resemble
            a link, use a button and change it with appropriate styles. Learn
            more:
            https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md{" "}
          </p>

          <div class="download">
            <div class="center">
              <button class="btn">
                <svg
                  width="180px"
                  height="60px"
                  viewBox="0 0 180 60"
                  class="border"
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="hl-line"
                  />
                </svg>
                <span>Download CV</span>
              </button>
            </div>

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
      </div>
    </div>
  );
}

export default Header;
