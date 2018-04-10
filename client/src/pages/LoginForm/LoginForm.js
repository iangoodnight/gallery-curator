import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SubmitBtn from "../../components/Form";
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import { update } from '../../services/withUser';
import API from "../../utils/API";

class LoginForm extends Component {
  state = {
    username: null,
    password: null
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
      history.push('/dashboard');
    })
    .catch(err => {
      // an error occured, so let's record the error in our state so we can display it in render
      // if the error response status code is 401, it's an invalid username or password.
      // if it's any other status code, there's some other unhandled error so we'll just show
      // the generic message.
      this.setState({
        error: err.response.status === 401 ? 'Invalid username or password.' : err.message
      });
    });
  }

  render() {
    const { error } = this.state

    return (
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
    );
  }
}

export default LoginForm