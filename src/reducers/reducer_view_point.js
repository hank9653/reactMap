import {FETCH_VIEWPOINT} from '../actions/index';

export default function(state = [], action) {
	
	switch (action.type){
		case FETCH_VIEWPOINT: 
			console.log('ViewPoint received', action);
			return [action.payload, ...state];
	}
	return state;
}