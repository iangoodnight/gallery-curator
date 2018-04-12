// import axios from "axios";
import React, { Component, Fragment } from "react";
import Editable from 'react-x-editable';
import SubmitBtn from "../../components/Form";
import DashJumbotron from "../../components/DashJumbotron";
import Portfolio from "../../components/Portfolio";
import Card from "../../components/Card";
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormFeedback, 
  FormText, 
  Button,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
} from 'reactstrap';
import { withUser } from '../../services/withUser';
import API from "../../utils/API";

class Dashboard extends Component {
			
	constructor(props) {
    super(props);
    this.state = {
    modal: false,
    backdrop: true,
		user: null,
		artist: null,
		art: [],
		src: "",
    bio: "",
		title: ""    
    };

    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  componentDidMount() {
    // only try loading stuff if the user is logged in.
    if (!this.props.user) {
      return;
		}
		console.log("user id: ", this.props.user.id);
		const id = this.props.user.id;
		this.getArtist(id);
	}


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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

  handleUpdate = event => {
    event.preventDefault();
    const data = {
      bio: this.state.bio
    }
    const id = this.props.user.id;
    console.log('Saving data:', data);
    API.put(id, data)
      .then(res => { 
        console.log("saved! ", data);
        this.setState({
          bio: ""
        });
      })
      .catch(err => console.log("handleUpdate: ", err));
    this.getArtist(this.props.user.id); 
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
              <div>
                <ul>
                  <li>
                  	<div className="row">
                  		<div className="col-8">
                  			<h4>Username: {artist.username}</h4>
                  		</div>
                      <div className="col-4" style={{padding: "5px"}}>
                        <button className="btn btn-sm btn-secondary disabled">Update</button>
                      </div>
                	</div>
                  </li>
                  <li>
                	<div className="row">
                		<div className="col-8">
                			<h4>Email: {artist.email}</h4>
                		</div>
                    <div className="col-4" style={{padding: "5px"}}>
                      <button className="btn btn-sm btn-secondary disabled">Update</button>
                    </div>
                	</div>
                  </li>
                  <li>
                	<div className="row">
                		<div className="col-8">
                			<h4>Bio: {artist.bio}</h4>
                		</div>
                    <div className="col-4" style={{padding: "5px"}}>
                      <button onClick={this.toggle} className="btn btn-sm btn-primary">Update</button>
                    </div>
                	</div>
                  </li>       	
                </ul>
              </div>
            </div>
            <div className="container">
            	{this.state.art.length ? (
            		<Portfolio>
		            		{this.state.art.map(art => (
		            			<Card image={art} key={art.src} />
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
                <div style={{paddingBottom: "100px"}}>
  				        <Button 
  				          color="primary"
  				          size="lg"
  				          type="submit"
  				          block
  				          >Submit
  				        </Button>
                </div>
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
        <Modal isOpen={this.state.modal} 
          toggle={this.toggle} 
          className={this.props.className} 
          backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="bio">Bio</Label>
                <Input
                  value={this.state.bio}
                  onChange={this.handleInputChange} 
                  type="textarea" 
                  name="bio"
                  id="bio" 
                />
              </FormGroup>
                <Button
                  onClick={this.toggle}
                  color="primary"
                  size="sm"
                  type="submit"
                  block
                    >Submit
                </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" 
              onClick={this.toggle}
            >Cancel
            </Button>
          </ModalFooter>
        </Modal>


      </Fragment>
    );
  }
}
// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(Dashboard);

