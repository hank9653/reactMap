import React, { Component } from 'react';
import { Marker } from 'react-google-maps';
import {OverlayView} from 'react-google-maps';



class DriverMarker extends Component {
	constructor(props) {
		super(props);

		//const { latitude, longitude, DriverId, DriverName } = this.props.info;
		//const position = { lat: latitude, lng: longitude };
		const position = this.props.position;
		console.log("this.props.info");
		console.log(this.props.position);
	}

	render() {
		return(
			<OverlayView
                position={this.props.position}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
                <div>
                    <img height="40" width="40" src="/src/datas/car.png" />                   
                </div>
            </OverlayView>
		);
	}
}

export default DriverMarker;