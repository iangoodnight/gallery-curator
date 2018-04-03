import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = props => (
	<section className="portfolio text-center p-60 p-lg-100" id="portfolio-1">
	  <div className="container">
	    <div className="row">
	      <div className="col-12">
	        <h1 className="mb-40 mb-lg-80">Portfolio</h1>
	        <div className="row mb-30">
	          <div className="col-12 col-sm-6 mb-15 mb-sm-30">
	            <div className="card"><img className="image pic-lg" src="img/img-square.png"/>
	              <div className="p-30 ph-30">
	                <h2 className="mb-10">Item One</h2>
	                <p><span className="icon icon-pin-stroke"></span><span>Geolocation</span></p>
	              </div>
	            </div>
	          </div>
	          <div className="col-12 col-sm-6 mb-15 mb-sm-30">
	            <div className="card"><img className="image pic-lg" src="img/img-square.png"/>
	              <div className="p-30 ph-30">
	                <h2 className="mb-10">Item Two</h2>
	                <p><span className="icon icon-pin-stroke"></span><span>Geolocation</span></p>
	              </div>
	            </div>
	          </div>
	          <div className="col-12 col-sm-6 mb-15 mb-sm-30">
	            <div className="card"><img className="image pic-lg" src="img/img-square.png"/>
	              <div className="p-30 ph-30">
	                <h2 className="mb-10">Item Three</h2>
	                <p><span className="icon icon-pin-stroke"></span><span>Geolocation</span></p>
	              </div>
	            </div>
	          </div>
	          <div className="col-12 col-sm-6 mb-15 mb-sm-30">
	            <div className="card"><img className="image pic-lg" src="img/img-square.png"/>
	              <div className="p-30 ph-30">
	                <h2 className="mb-10">Item Four</h2>
	                <p><span className="icon icon-pin-stroke"></span><span>Geolocation</span></p>
	              </div>
	            </div>
	          </div>
	        </div><a className="b-500" href=""><span className="icon icon-star"></span><span>All items</span></a>
	      </div>
	    </div>
	  </div>
	</section>
);

export default Portfolio;