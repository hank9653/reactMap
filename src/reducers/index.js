import { combineReducers } from 'redux';
import ViewPointReducer from './reducer_view_point';

const rootReducer = combineReducers({
	viewPoint: ViewPointReducer
});

export default rootReducer;
