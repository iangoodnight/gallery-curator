import React from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Button } from 'reactstrap';

const DashJumbotron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, {props.name}!</h1>
        <p className="lead">Your Dashboard is a place for you to upload your images and edit your public information.</p>
        <hr className="my-2" />
        <p>View your public portfolio page.</p>
        <p className="lead">
          <Link to={"/" + props.userName} className="btn" color="primary">View</Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default DashJumbotron;
