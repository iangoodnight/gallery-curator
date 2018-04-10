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
import "./Footer.css";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      username: null,
      password: null
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
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
      this.toggle();
      this.context.router.history.push('/dashboard');
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
    console.log("this.props: ", this.props);

    return (
      <section className="footers text-center" id="footers-8">
        <div className="container">
          <div className="p-40">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-lg-3 text-lg-left mb-20 mb-lg-0">
                <div className="navbar-header"><Link to="/"><img className="banner" src="img/gallery-logo.png" alt="Gallery-Curator"/></Link></div>
              </div>
              <div className="col-12 col-lg-6 mb-20 mb-lg-0">
                <nav className="navbar"><Link to="/">Home</Link><button onClick={this.toggle}>Modal</button><Link to="/create">Submit</Link><Link to="/login">Login</Link><a href="">Menu Five</a></nav>
              </div>
              <div className="col-12 col-lg-3 text-lg-right">
                <p>&copy; 2018 Ian Goodnight</p>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
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
                    color="primary"
                    size="lg"
                    type="submit"
                    block
                      >Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </section> 
    );
  }
}

export default Footer;