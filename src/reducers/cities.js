const initialState = [];

export default function cities (state = initialState, action) {
	if (action.type === 'ADD_CITY') {
		return [
			...state,
			action.city
		];
	} else if (action.type === 'DELETE_CITY') {
		return state.filter(item => {
			return !(item.id === action.id);
		});
	}

	return state;
}