import React, { Component } from 'react';

class CoordinatesButton extends Component {

  passCoords = (ev) => {
    this.props.onReceiveCoordinates([ev.clientX, ev.clientY])
  }

  render() {
    return (
      <button onClick={this.passCoords}> </button>
    )
  }
}

export default CoordinatesButton
