import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  createCoordinateArray = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.createCoordinateArray}>Click</button>
    )
  }

}
