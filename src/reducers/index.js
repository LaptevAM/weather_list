import { combineReducers } from 'redux';

import cities from './cities';
import selectWeather from './selectWeather';
import selectCity from './selectCity';

export default combineReducers({
	cities,
	selectWeather,
	selectCity	
})