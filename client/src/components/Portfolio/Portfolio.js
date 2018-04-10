import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = ({ children }) => {
	return (
		<section className="portfolio text-center p-60 p-lg-100" id="portfolio-1">
		  <div className="container">
		    <div className="row">
		      <div className="col-12">
		        <h1 className="mb-40 mb-lg-80">Portfolio</h1>
		        <div className="row mb-30">

		        	{ children }

		        </div>
		      </div>
		    </div>
		  </div>
	</section>
	);
};

export default Portfolio;


