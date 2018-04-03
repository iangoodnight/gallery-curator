import React, { Component } from "react";
import Gallery from "../../components/Gallery";
import CardRight from "../../components/CardRight";
import Portfolio from "../../components/Portfolio";

class Artist extends Component {

	render() {
		return (
			<div>
				<Gallery />
				<CardRight />
				<Portfolio />
			</div>
		);
	}

}

export default Artist;