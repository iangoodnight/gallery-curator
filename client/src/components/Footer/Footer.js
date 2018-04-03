import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => (
  <section className="footers text-center" id="footers-8">
    <div className="container">
      <div className="p-40">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-3 text-lg-left mb-20 mb-lg-0">
            <div className="navbar-header"><a href=""><img src="img/logos/logo.svg" alt=""/></a></div>
          </div>
          <div className="col-12 col-lg-6 mb-20 mb-lg-0">
            <nav className="navbar"><a href="">Menu One</a><a href="">Menu Two</a><a href="">Menu Three</a><a href="">Menu Four</a><a href="">Menu Five</a></nav>
          </div>
          <div className="col-12 col-lg-3 text-lg-right">
            <p>&copy; 2018 Ian Goodnight</p>
          </div>
        </div>
      </div>
    </div>
  </section> 
);

export default Footer;