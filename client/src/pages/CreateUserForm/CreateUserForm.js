import React, { Component } from "react";
import SubmitBtn from "../../components/Form";
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import { update } from '../../services/withUser';
import API from "../../utils/API";

class CreateUserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      email: "",
      bio: "",
      url: ""      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

    handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const data = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      bio: this.state.bio,
      url: this.state.url,
    }
    const { history } = this.props;
    console.log('Saving data:', data);
    API.submit(data)
      .then(res => { 
        console.log("saved! ", data);
        const newUser = {
          username: this.state.username,
          password: this.state.password
        }
        console.log("logging on user: ", newUser);
        API.validate(newUser)
          .then(user => {
            update(user.data);
            history.push('/dashboard');
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log("submitForm: ", err));  
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <div className="container">
           <div className="container">
              <FormGroup>
                <Label for="username">Username</Label>
                 <Input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  type="text"
                  name="username"
                  id="username"
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
                <FormText></FormText>
              </FormGroup>
            </div>
           <div className="container">
              <FormGroup>
                <Label for="password">Password</Label>
                 <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  type="password"
                  name="password"
                  id="password"
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
                <FormText></FormText>
              </FormGroup>
            </div>   
            <div className="container">
              <FormGroup>
                <Label for="name">Full Name</Label>
                 <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  type="text"
                  name="name"
                  id="name"
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
                <FormText></FormText>
              </FormGroup>
            </div>
            <div className="container">
              <FormGroup>
                <Label for="email">E-mail</Label>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  type="text"
                  name="email"
                  id="email"
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
                <FormText></FormText>
              </FormGroup>
            </div>
            <div className="container">
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
              <FormGroup>
                <Label for="url">Website</Label>
                <Input
                  value={this.state.url}
                  onChange={this.handleInputChange}                 
                  type="url" 
                  name="url" 
                  placeholder="http://www.imgur.com" 
                  id="url"
                />
              </FormGroup>
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

export default CreateUserForm