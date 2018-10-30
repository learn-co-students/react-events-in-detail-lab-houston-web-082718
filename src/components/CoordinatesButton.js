import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    coordinatesArray = (event) => {
        const arr = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(arr);
    }
    
    
    render() {
        return (
            <button onClick={this.coordinatesArray}>This is a really long button.</button>
        )
    }
}