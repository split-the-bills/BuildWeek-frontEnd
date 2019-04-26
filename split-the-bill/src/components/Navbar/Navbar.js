import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <h3>Split the Bill</h3>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <nav className="navbar navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </nav>
        </div>
      </nav>
    );
  }
}
