import React from "react";
import "../Assets/Nav.css";

import log from "../log.png";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="logo_img">
            <img className="img" src={log} alt="" />
          </div>
          <button
            id="threeline"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
