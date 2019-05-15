// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  constructor() {
    super()
  }

  onClickButton = (ev) => {
    // console.log(ev.clientX)
    // console.log(ev.clientY)
    let coordinates = []
    coordinates.push(ev.clientX)
    coordinates.push(ev.clientY)
    this.props.onReceiveCoordinates(coordinates)
  }

render() {
  return (
    <div>
      <button onClick={this.onClickButton}>Some Button</button>
    </div>
  )
}

}

export default CoordinatesButton
