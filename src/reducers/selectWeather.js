const initialState = {
	list: []
};

export default function selectWeather (state = initialState, action) {
	switch (action.type){
		case 'SELECT_WEATHER': 
			return action.weather;
		case 'DELETE_CITY': 
			if (state.city.id === action.id) {
				return initialState;
			}
		default:
		 return state;
	}
}