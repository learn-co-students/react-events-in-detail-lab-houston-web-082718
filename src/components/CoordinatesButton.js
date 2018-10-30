import React, { Component } from "react";

class CoordinatesButton extends Component {
  xAndY = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.xAndY}>Coords</button>;
  }
}

export default CoordinatesButton;
