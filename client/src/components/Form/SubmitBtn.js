import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className="container">
        <Button color="primary" size="lg" block>Submit</Button>
      </div>
    );
  }
}