// import axios from "axios";
import React, { Component, Fragment } from "react";
import Editable from 'react-x-editable';
import SubmitBtn from "../../components/Form";
import DashJumbotron from "../../components/DashJumbotron";
import Portfolio from "../../components/Portfolio";
import Card from "../../components/Card";
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import { withUser } from '../../services/withUser';
import API from "../../utils/API";

class Dashboard extends Component {
			
	state = {
		user: null,
		artist: null,
		art: [],
		src: "",
		title: ""    
  };



  componentDidMount() {
    // only try loading stuff if the user is logged in.
    if (!this.props.user) {
      return;
		}
		console.log("user id: ", this.props.user.id);
		const id = this.props.user.id;
		this.getArtist(id);
	}

	getArtist = id => {
		API.getArtist(id)
			.then(res => {
				console.log("res.data: ", res.data);
				this.setState({
					artist: res.data
				})
				this.getArt(id);
			})
			.catch(err => console.log(err));
	};

	getArt = id => {
		API.getArt(id)
			.then(res => {
				console.log("res.data: ", res.data);
				this.setState({
					art: res.data
				})
			})
			.catch(err => console.log(err));
	};

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      _userId: this.state.artist._id,
      src: this.state.src,
      title: this.state.title
    }
    console.log('Saving data:', data);
    API.add(data)
      .then(res => { 
        console.log("saved! ", data);
        this.setState({
        	src: "",
        	title: ""
        });
      })
      .catch(err => console.log("submitForm: ", err));
    this.getArt(this.props.user.id); 
  }

	render() {
		const { user } = this.props;
		const { artist } = this.state;
		console.log("artist: ", artist);
		console.log("art length: ", this.state.art.length);
    return (
      <Fragment>
        {user && artist &&
          <div className="container">
          	<div className="container">
          		<DashJumbotron userName={artist.username} name={artist.name}/>
	        	</div>
            <div className="container">
            	<div className="row">
            		<div className="col-12">
            			<h4>Username: {artist.username}</h4>
            		</div>
            	</div>
            	<div className="row">
            		<div className="col-12">
            			<h4>Email: {artist.email}</h4>
            		</div>
            	</div>
            	<div className="row">
            		<div className="col-12">
            			<h4>Bio: {artist.bio}</h4>
            		</div>
            	</div>
            	<div className="row">
            		<div className="col-12">
            			<h4>Url: {artist.url}</h4>
            		</div>
            	</div>         	
            </div>
            <div className="container">
            	{this.state.art.length ? (
            		<Portfolio>
		            		{this.state.art.map(art => (
		            			<Card image={art} />
		            		))}
		            </Portfolio>
            		) : (
								<div>
									<h3>Upload images to get started!</h3>
								</div>
            		)
            	}
            </div>
          	<div className="container">
          		<Form onSubmit={this.handleSubmit}>
			        	<FormGroup>
			          	<Label for="src">Upload Image Link</Label>
			            <Input
			              value={this.state.src}
			              onChange={this.handleInputChange}
			              type="text"
			              name="src"
			              id="src"
			            />
			            <FormFeedback>You will not be able to see this</FormFeedback>
			            <FormText></FormText>
			          </FormGroup>
			        	<FormGroup>
			          	<Label for="title">Title</Label>
			            <Input
			              value={this.state.title}
			              onChange={this.handleInputChange}
			              type="text"
			              name="title"
			              id="title"
			            />
			            <FormFeedback>You will not be able to see this</FormFeedback>
			            <FormText></FormText>
			          </FormGroup>
				        <Button 
				          color="primary"
				          size="lg"
				          type="submit"
				          block
				          >Submit
				        </Button>
          		</Form>
          	</div>
 					</div>
        }
        {user && !artist &&
          <div>Hold on, looking for your info...</div>
        }
        {!user &&
          <div>Hey! I don't recognize you! Register and log in using the link above</div>
        }
      </Fragment>
    );
  }
}
// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(Dashboard);

