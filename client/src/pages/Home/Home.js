import React, { Component } from "react";
import Slider from "../../components/Slider";
import Shoutbox from "../../components/Shoutbox";
import CardRight from "../../components/CardRight";
import CardLeft from "../../components/CardLeft";

class Home extends Component {

	render() {
		return (
			<div>
				<Slider />
				<Shoutbox />
				<CardRight />
				<CardLeft />
				<CardRight />
			</div>
		);
	}

}

export default Home;