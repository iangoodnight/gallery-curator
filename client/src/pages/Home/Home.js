import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import CardRight from "../../components/CardRight";
import CardLeft from "../../components/CardLeft";
import { withUser } from '../../services/withUser';
import API from "../../utils/API";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0,
			artists: [],
			items: [],
		};
		this.next = this.next.bind(this);
	  this.previous = this.previous.bind(this);
	  this.goToIndex = this.goToIndex.bind(this);
	  this.onExiting = this.onExiting.bind(this);
	  this.onExited = this.onExited.bind(this);
	}

	onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

	componentDidMount() {
		this.getArtists();
		this.getAllArt();
	}

	getArtists = () => {
		API.getAllArtists()
			.then(res => {
				this.setState({
					artists: res.data
				})
			})
			.catch(err => console.log(err));
	}

	getAllArt = () => {
		API.getAllArt()
			.then(res => {
				console.log("setting items to: ", res.data);
				this.setState({
					items: res.data
				})
			})
			.catch(err => console.log(err));
	}

	render() {
		const { activeIndex } = this.state;
    const slides = this.state.items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
        	<div style={{height: "478px", backgroundColor: "#414141"}}>
	          <img 
	          	src={item.src} 
	          	alt="Portfolio Item" 
	          	className="img-fluid rounded mx-auto d-block"
	          	style={{
	          		height: "100%",
	          		margin: "auto"
	          	}} 
	          />
	          <CarouselCaption captionText={item.title} captionHeader={item.title} />
	        </div>
        </CarouselItem>
      );
    });
    let position = true;

		return (
			<div style={{border: "1px solid black"}}>
	      <Carousel
	        activeIndex={activeIndex}
	        next={this.next}
	        previous={this.previous}
	      >
	        <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
	        {slides}
	        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
	        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
	      </Carousel>
	      {this.state.artists.length ? (
	      	<div>
		      	{this.state.artists.map((artist, i) => {
		      		return (
		      		<div key={artist.username}>
		      			{i % 2 == 0 ? (
									<CardRight artist={ artist } />
									) : ( 
									<CardLeft artist={ artist } />
								)
							}
							</div>
		      	)})}
		      </div>
	      	) : (
	      	<div>
	      		<h3>Nothing to display.</h3>
	      	</div>
	      	)
	    	}
	    </div>
		);
	}

}

export default withUser(Home);

			