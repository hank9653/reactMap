import React, { Component } from 'react';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {fetchViewPoint} from '../actions/index';
import {connect} from 'react-redux';



class ViewPointList extends Component {
	constructor(props) {
		super(props);

		const city = [ { name: '北科', location: {lat:'25.0426004', lng:'121.5359464'}},
					   { name: '台北火車站', location: {lat:'25.0477387', lng:'121.5170396'}},
					   { name: '台北101大樓', location: {lat:'25.0339639', lng:'121.5644722'}} ];

		this.state = {city: _.mapKeys(city,"name")};

		this.viewPointListChange = this.viewPointListChange.bind(this);
	}

	renderCityList(city) {
		return(
			<option key={ city.name }>{city.name}</option>
		);
	}

	viewPointListChange (event) {
		console.log("event");
		console.log(event.target.value);
		console.log(this.props);
		this.props.fetchViewPoint( _.find(this.state.city, {'name': event.target.value} ));
	}

	render() {
		{console.log(this.state.city)}
		return(
			<select onChange={this.viewPointListChange}>
				{_.map(this.state.city, this.renderCityList)}
			</select>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchViewPoint},dispatch)
}

export default connect(null, mapDispatchToProps)(ViewPointList);