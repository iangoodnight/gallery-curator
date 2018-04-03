import React from "react";
import { Link } from "react-router-dom";
import "./CardRight.css";

const CardRight = props => ( 
  <section className="teams p-60 p-lg-100 text-center text-sm-left" id="teams-9">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-sm-6 mb-40 mb-sm-0">
          <h1 className="mb-20">Wireframe connects the underlying structure</h1>
          <h4 className="mb-40">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts away

          </h4>
          <button className="btn btn-small">Button</button>
        </div>
        <div className="col-12 col-sm-6"><img className="image userpic-xl" src="img/img-square.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
);

export default CardRight;