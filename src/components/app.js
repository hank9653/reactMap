import React, { Component } from 'react';

import MyMap from '../containers/my_map';
import MapInfo from '../containers/map_info';

export default class App extends Component {
	render() {
		return (
			<div className="full">
				<MyMap />
				<MapInfo />
			</div>
		);
	}
}