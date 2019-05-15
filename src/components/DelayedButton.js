import React, { Component } from 'react';

class DelayedButton extends Component {

  handleDelayClick = (ev) => {
    //const target = ev
     ev.persist()
    setTimeout(() => this.handleEvent(ev), this.props.delay)
  }

  handleEvent = (target) => {
    this.props.onDelayedClick(target)
  }

  render() {
    return (
      <button onClick={this.handleDelayClick}> </button>
    )
  }
}

export default DelayedButton
