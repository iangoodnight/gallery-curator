import React from "react";
import "./Card.css";

const Card = props => (
	<div className="col-12 col-sm-6 mb-15 mb-sm-30">
		<div className="card">
			<div className="card-container container-fluid rounded mx-auto d-block">
				<span className="helper"></span>
				<img 
					className="img-fluid image pic-lg card-img rounded mx-auto"
					src={props.image.src}
					alt="Image" />
			</div>
			<div className="p-30 ph-30">
				<h2 className="p-30 ph-30">{props.image.title}</h2>
				<p></p>
				<button data-cp-url={props.image.src}>Buy Now</button>
			</div>
		</div>
	</div>
);

export default Card;