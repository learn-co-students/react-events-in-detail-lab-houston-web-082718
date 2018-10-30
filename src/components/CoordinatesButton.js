// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button onClick={this.handleClick}>Coordinates</button>;
  }

  handleClick = event => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };
}
