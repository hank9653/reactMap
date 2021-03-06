import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker , DirectionsRenderer } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';
import {connect} from 'react-redux';
import DriverMarker from './driver_marker';
import {driversLocation} from '../datas/sample_drivers_location';

const GettingStartedGoogleMap = withGoogleMap(props => (

	<GoogleMap
		defaultZoom={12}
		center={props.center}
	>
		<MarkerClusterer
			averageCenterMarkerClusterer
			enableRetinaIcons
			gridSize={1}
		>
			{props.markers.map(marker => (
				<DriverMarker
					position={{ lat: marker.latitude, lng: marker.longitude }}
					key={marker.id}
				/>
			))}
		</MarkerClusterer>
		{(props.directions==null) ? <Marker position={props.center}/> : <DirectionsRenderer directions={props.directions} />}
	</GoogleMap>
));


class MyMap extends Component {
	constructor() {
		super();

		const center = { lat: 60, lng: 105 };
		this.state = {center: center, directions: null};
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

	componentWillReceiveProps(nextProps) {
		if (typeof nextProps == "null"){
			return;
		}else{
			const location = new google.maps.LatLng(this.state.center.lat, this.state.center.lng);
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
					markers={driversLocation.data}
				/>
			</div>
		);
	}
}

function mapStateToProps({viewPoint}){

	return {viewPoint};
}

export default connect(mapStateToProps)(MyMap);