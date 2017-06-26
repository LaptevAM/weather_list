import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCityWeather } from '../middlewar/loadCityWeather';
import WeatherList from './WeatherList';
import trash from './trash.svg';
import './CityList.css';


class CityList extends Component {
	render() {
		const { items, selected_id, selected_weather, selected_city} = this.props.cities;
		let weather_list = null;

		if (selected_id) {
			weather_list = <WeatherList list = { selected_weather } city = { selected_city }/>;
		}

	  return (
			<div className='CityList'>
				<h1>Список добавленных городов</h1>
				<div className='table'>
					<div className='table-row'>
						<h3 className='table-row-item table-row-item_small'>#</h3>
						<h3 className='table-row-item'>Город</h3>
						<h3 className='table-row-item'>Страна</h3>
						<h3 className='table-row-item table-row-item_middle'>Выбранный</h3>
						<h3 className='table-row-item table-row-item_small'></h3>
					</div>
          {items.map((item,index) =>
            <div key={item.id} className='table-row'>
            	<div className='table-row-item table-row-item_small'>{ index + 1 }</div>
            	<div className='table-row-item'>{ item.name }</div>
            	<div className='table-row-item'>{ item.country }</div>
            	<div className='table-row-item table-row-item_middle'>
            	<label className='radio'>
            		<input className='radio__input' type='radio' onChange={this.props.onSelectCity.bind(null, item.id)} checked={ item.id === selected_id } name='city'/>
            		<div className="radio__circle"></div>
            	</label>
     
            	</div>
            	<div className='table-row-item table-row-item_small'>
            		<button className="trash" onClick={this.props.onDeleteCity.bind(null, item.id)}><img className='trash-img' src={ trash } alt='удалить'/></button>
            	</div>
            </div>
          )}
        </div>
        { weather_list }
	    </div>
	  );
	}
}

export default connect(
  state => ({
    cities: state.cities
  }),
  dispatch => ({
  	onDeleteCity: (id) => {
      dispatch({type: 'DELETE_CITY', id});
    },
    onSelectCity: (id) => {
      const query = 'id=' + id,
      			select = true;
      dispatch(loadCityWeather(query, select))
        .then(data => {
          if (data.cod === "200") {
            dispatch({type: 'SELECT_CITY', data});
          }
        });
    }
  })
)(CityList);