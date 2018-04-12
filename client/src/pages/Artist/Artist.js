import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from 'reactstrap';
import Gallery from "../../components/Gallery";
import CardRight from "../../components/CardRight";
import Portfolio from "../../components/Portfolio";
import Card from "../../components/Card";
import { withUser } from '../../services/withUser';
import API from "../../utils/API";

class Artist extends Component {
  
  constructor(props) {
  	super(props);
		this.state = {
			activeIndex: 0,
      modal: false,
      backdrop: true,
			artist: {},
			items: [],
		};
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
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

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

	componentDidMount() {
		const username = this.props.match.params.artist;
		this.getMedia(username);
	}

	getMedia = username => {
		API.getMedia(username)
			.then(res => {
				this.setState({
					artist: res.data
				})
				const id = res.data._id;
				this.getArt(id);
			})
			.catch(err => console.log("getMedia failed: ", err));
	};

	getArt = id => {
		API.getArt(id)
			.then(res => {
				this.setState({
					items: res.data
				})
			})
			.catch(err => console.log(err));
	};

	render() {
		const artist = this.props.match.params.artist;
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
	          <CarouselCaption captionText={item.title} captionHeader="Title" />
	        </div>
        </CarouselItem>
      );
    });

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
				<CardRight artist={this.state.artist} />
	        {this.state.items.length ? (
	          <Portfolio>
			        {this.state.items.map(item => (
			          <Card image={item} key={item.src} toggle={this.toggle} />
			        ))}
			      </Portfolio>
	         	) : (
						<div>
							<h3>Upload images to get started!</h3>
						</div>
	          )
	        }
	      <div>
	        <Modal isOpen={this.state.modal} 
	          toggle={this.toggle} 
	          className={this.props.className} 
	          backdrop={this.state.backdrop}>
	          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
	          <ModalBody>
	          	Image
	          </ModalBody>
	          <ModalFooter>
	           	<Button color="primary" 
	            	onClick={this.toggle}
	           	>
	            	<Link to="/create" 
	              	className="button-link"
	            	>Create Profile
	            	</Link>
	           	</Button>{' '}
	           	<Button color="secondary" 
	             	onClick={this.toggle}
	           	>Cancel
	           	</Button>
	         	</ModalFooter>
	       	</Modal>	       	
	    	</div>
			</div>
		);
	}

}

export default withUser(Artist);