const initialState = {
	is_loading: false,
	init: true,
	result: false,
}

export default function loading (state = initialState, action) {
	switch (action.type) {
		case 'FETCH_REQUEST':
			if (action.flag) {
				return state;	
			}
			return Object.assign({}, state, {
				is_loading: true,
				init: false
			}); 
		case 'FETCHED_CITY_SUCCESS':
			return Object.assign({}, state, {
				is_loading: false,
				init: false,
				result: true
			});
		case 'FETCHED_CITY_ERROR':
			return Object.assign({}, state, {
				is_loading: false,
				init: false,
				result: false
			});
		case 'RESET_STATE':
			return Object.assign({}, state, {
				is_loading: false,
				init: true,
				result: false
			});
		default:
			return state;
	}
}