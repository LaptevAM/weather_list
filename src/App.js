import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCityWeather } from './middlewar/loadCityWeather'
import './App.css';

class App extends Component {
  addCity(e) {
    let city_name = this.inputVal.value.trim();

    e.preventDefault();

    if (city_name) {
      this.props.onAddCity(city_name);
      this.inputVal.value = '';
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input type="text" placeholder="Поиск" ref={(input) => this.inputVal = input } />
        <button onClick={this.addCity.bind(this)}>
          Добавить город
        </button>
        <ul>
          {this.props.cities.map(item =>
              <li key={item.id}>{ item.name } 
                <button onClick={this.props.onDeleteCity.bind(null, item.id)}>Удалить</button>
                <input type='radio' onClick={this.props.onSelectCity.bind(null, item.id)} checked={this.props.select_city.id === item.id} name='city'/>
              </li>
          )}
        </ul>
        <ul>
          { this.props.select_weather.list.map((item, index) =>
              <li key={ item.dt }>
                  <span>{ (item.main.temp_min-273).toFixed() }</span>
              </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    cities: state.cities,
    select_weather: state.selectWeather,
    select_city: state.selectCity
  }),
  dispatch => ({
    onAddCity: (name) => {
      const query = 'q=' + name;
      dispatch(loadCityWeather(query))
        .then(data => {
          if (data.cod === "200") {
            const city = {
              id: data.city.id,
              name: data.city.name
            }, 
            weather = {
              city,
              list: data.list
            };

            dispatch({type: 'ADD_CITY', city});
            dispatch({type: 'SELECT_CITY', city});
            dispatch({type: 'SELECT_WEATHER', weather});
          }
        });
    },
    onDeleteCity: (id) => {
      dispatch({type: 'DELETE_CITY', id});
    },
    onSelectCity: (id) => {
      const query = 'id=' + id;
      dispatch(loadCityWeather(query))
        .then(data => {
          if (data.cod === "200") {
            const city = {
              id: data.city.id,
              name: data.city.name
            }, 
            weather = {
              city,
              list: data.list
            };

            dispatch({type: 'SELECT_WEATHER', weather});
            dispatch({type: 'SELECT_CITY', city});
          }
        });
    }
  })
)(App);