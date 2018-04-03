import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = props => (
  <section className="sliders text-center" id="sliders-3">
    <div className="image h-300 h-lg-540 mb--60 pic-md">

    </div>
    <div className="container pb-60 pb-lg-100">
      <div className="card">
        <div className="slider no-gutters" id="sliders-3-slider">
          <div className="slider-item">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-lg-6 p-40 p-lg-80">
                <h1 className="mb-20">Platforma wireframe kit</h1>
                <h4 className="mb-40">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h4>
                <button className="btn btn-small">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;

      <a-scene>
        <a-sky src="https://i.imgur.com/GPILjhC.jpg" rotation="0 -130 0"></a-sky>
        <a-text font="kelsonsans" value="Sample Text" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
      </a-scene>