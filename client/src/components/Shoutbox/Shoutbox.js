import React from "react";
import "./Shoutbox.css";

const Shoutbox = props => (
  <section className="contents shout text-center p-60 p-lg-100" id="artists-header">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-12">
          <div className="container">
            <h4 className="mb-40">
              Gallery-Curator strives to create a local, curated, online gallery experience that offers artists a chance to reach a greater audience and collectors a chance to support the artists in their community.
            </h4>
            <div className="container">
              <h2>Current Featured Artists:</h2>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </section>  
);

export default Shoutbox;