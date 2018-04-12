import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from 'reactstrap';
import { update } from '../../services/withUser';
import API from "../../utils/API";
import "./Navbar.css";

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      backdrop: true,
      username: null,
      password: null
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleLogin = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    console.log("username: ", username, "password: ", password);
    // post an auth request
    axios.post('/api/auth', {
      username,
      password
    })
    .then(user => {
      // if the response is successful, update the current user and redirect to the home page
      update(user.data);
      // this.toggle();
      // history.push('/dashboard');
    })
    .catch(err => {
      console.log("err: ", err);
      // an error occured, so let's record the error in our state so we can display it in render
      // if the error response status code is 401, it's an invalid username or password.
      // if it's any other status code, there's some other unhandled error so we'll just show
      // the generic message.
      this.setState({
        error: err ? 'Invalid username or password.' : err
      });
    });
  }
 
  render() {
    const { error } = this.state;

    return (
      <section className="headers" id="headers-18">
        <div className="ph-15 ph-sm-30 ph-lg-70">
          <div className="row justify-content-between align-items-center h-100">
            <div className="col-3 col-sm-4">
            </div>
            <div className="col-6 col-sm-4 text-center"><Link to="/"><img className="img-fluid banner" src="img/gallery-logo.png"/></Link>
            </div>
            <div className="col-3 col-sm-4 text-right">
              <span className="d-sm-inline">
                <Button onClick={this.toggle}
                  color="secondary"
                  size="sm"
                  className="login-button"
                >Artist Portal
                </Button>
              </span>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.modal} 
          toggle={this.toggle} 
          className={this.props.className} 
          backdrop={this.state.backdrop}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
        <div 
          className="container"
          style={{margin: "50px auto"}}
        >
          <Form onSubmit={this.handleLogin}>
            <h1>Log In</h1>
            {error &&
              <div className="container">
                {error}
              </div>
            }
              <div className="container">
               <div className="container">
                  <FormGroup>
                    <Label for="username">Username</Label>
                     <Input
                      onChange={this.handleInputChange}
                      type="text"
                      name="username"
                    />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                  </FormGroup>
                </div>
               <div className="container">
                  <FormGroup>
                    <Label for="password">Password</Label>
                     <Input
                      onChange={this.handleInputChange}
                      type="password"
                      name="password"
                    />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText></FormText>
                  </FormGroup>
                </div> 
                <div className="container">  
                  <Button
                    onClick={this.toggleNested}
                    color="primary"
                    size="lg"
                    type="submit"
                    block
                      >Submit
                  </Button>
                  <Modal isOpen={this.state.nestedModal} 
                    toggle={this.toggleNested} 
                    onClosed={this.state.closeAll ? this.toggle : undefined}
                  >
                    <ModalHeader>Welcome!</ModalHeader>
                    <ModalBody>Welcome back!</ModalBody>
                    <ModalFooter>
                      <Button color="primary" 
                        onClick={this.toggleAll}
                      >
                        <Link to="/dashboard" 
                          className="button-link"
                        >Dashboard
                        </Link>
                      </Button>{' '}
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </Form>
          </div>
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
      </section>
    );
  }
}

export default Navbar;