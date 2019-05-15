import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  render(){
    return <button onClick={(ev) => this.props.onReceiveCoordinates([ev.screenX, ev.screenY])}/>
  }

  createArray = (ev) => {


  }
}
