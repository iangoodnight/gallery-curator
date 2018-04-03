import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import SubmitForm from "./pages/SubmitForm";
import Footer from "./components/Footer";


const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/artist" component={Artist} />
          <Route exact path="/submit" component={SubmitForm} />
        <Footer />
      </Wrapper>
    </div>
  </Router>
);

export default App;
