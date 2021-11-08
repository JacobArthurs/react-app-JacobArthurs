import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../jacob-arthurs-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div>
          <a href="#Home">
            <img
              className="Navbar-logo"
              src={logo}
              alt="Jacob Arthurs"
              title="Jacob Arthurs"
            ></img>
          </a>
        </div>
        <ul className="container-fluid">
          <li className="Navbar-items">
            <a href="#Home">Home</a>
          </li>
          <li className="Navbar-items">
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li className="Navbar-items">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
