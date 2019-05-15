// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  constructor() {
    super()
  }

  onClickHandle = (ev) => {
    ev.persist()
    setTimeout(() => {this.props.onDelayedClick(ev)}, this.props.delay)
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandle}>
          Delayed Button
      </button>
      </div>
    )
  }


}

export default DelayedButton
