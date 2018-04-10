import React from "react";
import { Link } from "react-router-dom";
import "./CardLeft.css";

const CardLeft = props => ( 
  <section 
    className="cardLeft teams p-60 p-lg-100 text-center text-sm-left" 
    id="teams-9"
  >
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 col-sm-6">
          <img 
            className="image userpic-xl" 
            src={props.artist.url} 
            alt={props.artist.name}/>
        </div>
        <div className="col-12 col-sm-6 mb-40 mb-sm-0">
          <div className="container">
            <h1 className="mb-20">
              {props.artist.name}
            </h1>
            <h4 className="mb-40">
              {props.artist.bio}
            </h4>
            <Link to={"/" + props.artist.username} className="btn btn-small">Button</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CardLeft;