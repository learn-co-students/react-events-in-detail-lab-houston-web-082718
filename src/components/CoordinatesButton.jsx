import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  renderCoords = (event) => {
      const coords = [event.clientX, event.clientY]
      return this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
        <button onClick={this.renderCoords}></button>
    )
  }

}
