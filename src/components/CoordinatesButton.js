import React from 'react';

class CoordinatesButton extends React.Component {

	handleClicked = (ev) => {
		this.props.onReceiveCoordinates([ev.clientX, ev.clientY]);
	};

	render() {

		return(
			<button onClick={this.handleClicked}></button>
		)
	}
}

export default CoordinatesButton
