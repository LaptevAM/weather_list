import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCityWeather } from '../middlewar/loadCityWeather';
import './Form.css';



	
class Form extends Component {

	addCity(e) {
	    let city_name = this.inputVal.value.trim();

	    e.preventDefault();

	    if (city_name) {
	      this.props.onAddCity(city_name);
	      this.inputVal.value = '';
	    }
	}

	toogleClass() {
		const {is_loading, result, init} = this.props.state_req;

		if (is_loading) {
			return 'form__button form__button_loading';
		} else if (init) {
			return 'form__button';
		} else if (result) {
			return 'form__button form__button_success';
		} else {
			return 'form__button form__button_error';
		}

	}

	render() {
	  return (
	    <div className='Form'>
	      <form onSubmit={this.addCity.bind(this)} className="form">
	        <input type="text" placeholder="Поиск" ref={(input) => this.inputVal = input } className="form__input" onFocus={ this.props.onResetState}/>
	        <button type='submit' className={ this.toogleClass() }>
	          <span>Добавить город</span>
	        </button>
	      </form>
	    </div>
	  );
	}
}

export default connect(
  state => ({
  	state_req: state.loading
  }),
  dispatch => ({
    onAddCity: (name) => {
      const query = 'q=' + name;
      dispatch(loadCityWeather(query))
        .then(data => {
          if (data.cod === "200") {
            dispatch({type: 'FETCHED_CITY_SUCCESS', data});
          } else {
          	dispatch({type: 'FETCHED_CITY_ERROR', data});
          }
        })
    },
    onResetState: () => {
    	dispatch({type: 'RESET_STATE'});
    }
  })
)(Form);
