import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = props => (
	<section className="sliders text-center bg-light p-50" id="sliders-1">
	  <div className="container">
	    <div className="slider slider-rounded-buttons" id="sliders-1-slider">
	      <div className="slider-item">
	        <div className="row justify-content-center p-70 p-lg-150">
	          <div className="col-12 col-sm-8 col-lg-6">
	            <h1 className="mb-20">Gallery-Curator</h1>
	            <h4 className="mb-40">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind of shining texts</h4>
	            <button className="btn"><span>Button</span>
	            </button>
	          </div>
	        </div>
	      </div>
	    </div><a className="b-500" href="">Explore more about us</a>
	  </div>
	</section>
);

export default Slider;