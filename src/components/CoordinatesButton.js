// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    storeCoordinateArray = (event) => {
        let coordinateArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinateArray)
    }
    render() {
        return (
            <button onClick={this.storeCoordinateArray}>Coordinates</button>
        )
    }
}