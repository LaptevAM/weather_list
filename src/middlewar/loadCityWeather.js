const root_url = "http://api.openweathermap.org/data/2.5/forecast/daily?";
const app_id = "&units=metric&appid=c01b843a388fbfd6107dc9f443df9931";

export function loadCityWeather(url, flag){
	return dispatch => {
		dispatch({type: 'FETCH_REQUEST', flag: flag});
		return fetch(root_url + url + app_id)
				.then(respones => respones.json())
	}
}