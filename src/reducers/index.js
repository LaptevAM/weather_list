import { combineReducers } from 'redux';

import cities from './cities';
import loading from './loading';

export default combineReducers({
	cities,
	loading
})