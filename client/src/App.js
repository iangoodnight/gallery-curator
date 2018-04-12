import axios from 'axios';
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { withUser, update } from "./services/withUser";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import CreateUserForm from "./pages/CreateUserForm";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";


class App extends Component {

  componentDidMount() {
    // this is going to double check that the user is still actually logged in
    // if the app is reloaded. it's possible that we still have a user in sessionStorage
    // but the user's session cookie expired.
    axios.get('/api/auth')
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
        if (err.response.status === 401) {
          update(null);
        }
      });
  }
  render() {
    const { user } = this.props;
    console.log("user object from App.js: ", user);
    console.log("this.props accessible from App.js: ", this.props);

    return (
      <Router>
        <div>
          <Fragment>
            <Wrapper>
              <div className="container-fluid outer">
                <Navbar />
              </div>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/create" component={CreateUserForm} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route path="/:artist" component={Artist} />
                </Switch>
              </div>
              <div className="container-fluid outer">
                <Footer {...this.props} />
              </div>
            </Wrapper>
          </Fragment>
        </div>
      </Router>
    );
  }
}

export default withUser(App);
