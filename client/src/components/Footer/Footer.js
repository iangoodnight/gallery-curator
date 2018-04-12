import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => ( 

      <section className="footers text-center" id="footers-8">
        <div className="container">
          <div className="p-40">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-lg-3 text-lg-left mb-20 mb-lg-0">
                <div className="navbar-header"><Link to="/"><img className="banner" src="img/gallery-logo.png" alt="Gallery-Curator"/></Link></div>
              </div>
              <div className="col-12 col-lg-6 mb-20 mb-lg-0">
                <nav className="navbar">
                  <a href="https://www.instagram.com/">
                    <i 
                      className="fa fa-instagram" 
                      style={{fontSize: "36px"}}
                    >
                    </i>
                  </a>
                  <a href="https://twitter.com/?lang=en">
                    <i className="fa fa-twitter" 
                      style={{fontSize: "36px"}}
                    >
                    </i>
                  </a>
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook" 
                      style={{fontSize: "36px"}}
                    >
                    </i>
                  </a>
                </nav>
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