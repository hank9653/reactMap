import React, { Component } from 'react';

import MyMap from '../containers/my_map';

export default class App extends Component {
	render() {
		return (
			<div className="full">
				<MyMap />
			</div>
		);
	}
}