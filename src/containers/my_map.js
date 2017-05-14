import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
	<GoogleMap
		defaultZoom={8}
		center={props.center}
	>
		<Marker
			position={props.center}
		/>
		{console.log(props)}
	</GoogleMap>
));


class MyMap extends Component {
	constructor() {
		super();

		const center = { lat: 60, lng: 105 };
		this.state = {center: center};
	}
	componentDidMount(){
		navigator.geolocation.getCurrentPosition((position) => {
	      	this.setState({
	        	center: {
	        		lat: position.coords.latitude,
	        		lng: position.coords.longitude,
	        	},
	        	content: `Location found using HTML5.`,
	    	});
		});
	}

	render() {
		return (
			<div className="full col-xs-8">
				<GettingStartedGoogleMap
					containerElement={
						<div style={{ height: `100%` }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
					center={this.state.center}
				/>
			</div>
		);
	}
}

// MyMap.setProps({center: {
//           lat: 60,
//           lng: 105,
//         }});

export default MyMap;