import React, { Component } from 'react';
import ViewPointList from './view_point_list';

class MapInfo extends Component {
	render(){
		return(
			<div className=".full-height col-xs-4">
				<ViewPointList />
			</div>
		);
	}
}

export default MapInfo;