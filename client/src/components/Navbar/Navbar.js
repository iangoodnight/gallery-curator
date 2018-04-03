import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <section className="headers" id="headers-18">
    <div className="ph-15 ph-sm-30 ph-lg-70">
      <div className="row justify-content-between align-items-center h-100">
        <div className="col-3 col-sm-4"><a href=""><img src="img/icons/burger.svg"/></a>
        </div>
        <div className="col-6 col-sm-4 text-center"><Link to="/"><img src="img/logos/logo.svg"/></Link>
        </div>
        <div className="col-3 col-sm-4 text-right"><a href=""><span className="d-none d-sm-inline">Cart</span>
          <div className="badge-dark">1</div></a>
        </div>
      </div>
    </div>
  </section>
);

export default Navbar;