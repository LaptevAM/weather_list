const root_url = "http://api.openweathermap.org/data/2.5/forecast?";
const app_id = "&lang=ru&appid=c01b843a388fbfd6107dc9f443df9931";

export function loadCityWeather(url){
	return dispatch => {
		return fetch(root_url + url + app_id)
				.then(respones => respones.json())
	}
}