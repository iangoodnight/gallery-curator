import React, { Component } from "react";
import SubmitBtn from "../../components/Form";
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import API from "../../utils/API";

class SubmitForm extends Component {

  // state = {
  //   name: "",
  //   email: "",
  //   bio: "",
  //   url: ""
  // };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      bio: "",
      url: ""      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleInputChange(event) {
  //   let value = event.target.value;
  //   let name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // }

    handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // const data = new FormData(event.target);
    const data = {
      name: this.state.name,
      email: this.state.email,
      bio: this.state.bio,
      url: this.state.url
    }
    console.log('Saving data:', data);
    // const inputs = event.target.getElementsByTagName('Input');
    // console.log("inputs: ", inputs);
    // this.setState({
    //   name: inputs.name.value,
    //   email: inputs.email.value,
    //   // bio: inputs.bio.value,
    //   url: inputs.url.value
    // })
   
    API.submit(data)
      .then(res => { 
        console.log("saved! ", data);
      })
      .catch(err => console.log("submitForm: ", err));  
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name) {
  //     this.submitForm();
  //   }
  // };

  // submitForm = data => {
  //   console.log('Saving data:', data);
  //   API.submit(data)
  //     .then(res => { 
  //       console.log("saved! ", data);
  //     })
  //     .catch(err => console.log("submitForm {", data, "}: ", err));
  // };

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="container">
              <FormGroup>
                <Label for="name">Name</Label>
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
                <Label for="url">Url</Label>
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

export default SubmitForm