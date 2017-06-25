const initialState = {};

export default function selectWeather (state = initialState, action) {

	switch (action.type) {
		case 'SELECT_CITY': 
			return action.city;
		case 'DELETE_CITY': 
			if (state.id === action.id) {
				return initialState;
			}
		default:
		 return state;
	}
	return state;
}