import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker , DirectionsRenderer } from 'react-google-maps';
import {connect} from 'react-redux';

const GettingStartedGoogleMap = withGoogleMap(props => (
	<GoogleMap
		defaultZoom={8}
		center={props.center}
	>
		<Marker
			position={props.center}
		/>
		{(props.directions==null) ? null:<DirectionsRenderer directions={props.directions} />}
		{console.log(props)}
	</GoogleMap>
));


class MyMap extends Component {
	constructor() {
		super();

		const center = { lat: 60, lng: 105 };
		this.state = {center: center,directions: null};
	}
	componentDidMount(){
		console.log("componentDidMount")
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

	componentWillReceiveProps(nextProps) {
		console.log("ViewPointState");
		console.log(nextProps);
		console.log(nextProps.viewPoint);
		const location = new google.maps.LatLng(this.state.center.lat, this.state.center.lng)
		const position = nextProps.viewPoint[0].location;
		const destination = new google.maps.LatLng(position.lat, position.lng);

		const DirectionsService = new google.maps.DirectionsService();

	    DirectionsService.route({
	    	origin: location,
	    	destination: destination,
	    	travelMode: google.maps.TravelMode.DRIVING,
	    }, (result, status) => {
	    	if (status === google.maps.DirectionsStatus.OK) {
	    		this.setState({
	    			directions: result,
	    		});
	    	} else {
	    		console.error(`error fetching directions ${result}`);
	    	}
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
					directions={this.state.directions}
				/>
			</div>
		);
	}
}

function mapStateToProps({viewPoint}){
	console.log("viewPoint");
	console.log(viewPoint);

	return {viewPoint};
	
}

export default connect(mapStateToProps)(MyMap);