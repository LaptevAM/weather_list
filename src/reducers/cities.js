const initialState = {
	items:[],
	selected_id: null,
	selected_city: "",
	selected_weather: []
};

export default function cities (state = initialState, action) {
	

	switch(action.type){
		case 'FETCHED_CITY_SUCCESS': {
			const { id, name, country} = action.data.city;
			return Object.assign({}, state, {
				items: [
					...state.items,
					{
						id,
						name,
						country,
					}
				],
				selected_city: name,
				selected_id: id,
				selected_weather: action.data.list
			})
		}
		case 'DELETE_CITY':{
			if (state.selected_id === action.id) {
				return Object.assign({}, state, {
					items: state.items.filter(item => {
						return !(item.id === action.id);
					}),
					selected_id: null,
					selected_city: "",
					selected_weather: []
				});
			} else {
				return Object.assign({}, state, {
					items: state.items.filter(item => {
						return !(item.id === action.id);
					})
				});
			}
		} 
		case 'SELECT_CITY': {
			return Object.assign({}, state, {
				selected_id: action.data.city.id,
				selected_weather: action.data.list,
				selected_city: action.data.city.name
			});
		}
		default:
			return state;
	}
}
