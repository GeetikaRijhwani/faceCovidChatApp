import React, { Component } from "react";
import logo from "./logo.png";
import {Link} from "react-router-dom";

export default class Navigation extends Component {
  
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="logo_section">
            
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" />
            </Link>
            
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
          <div className="collapse tsnav navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                      <Link className="nav-link" to="/login">
                      EXPERT LOGIN
                    </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  BLOGS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
