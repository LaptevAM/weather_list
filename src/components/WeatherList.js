import React, { Component } from 'react';

class WeatherList extends Component {
	getData(dt) {
		const date = new Date(dt*1000);
		return date.getDate().toString() + '.' + (date.getMonth()+1).toString() + '.' + date.getFullYear().toString()
	}
	render() {
		const { list, city} = this.props;
	  return (
			<div>
				<h1>Прогноз погоды для города { city }</h1>
				<div className='table'>
					<div className='table-row'>
						<h3 className='table-row-item table-row-item_small'>#</h3>
						<h3 className='table-row-item table-row-item_middle'>Дата</h3>
						<h3 className='table-row-item'>Минимальная темп.</h3>
						<h3 className='table-row-item'>Максимальная темп.</h3>
					</div>
          {list.map((item,index) =>
            <div key={ item.dt } className='table-row'>
            	<div className='table-row-item table-row-item_small'>{ index + 1 }</div>
            	<div className='table-row-item table-row-item_middle'>{ this.getData(item.dt) }</div>
            	<div className='table-row-item'>{ item.temp.min.toFixed() }</div>
            	<div className='table-row-item'>{ item.temp.max.toFixed() }</div>
            </div>
          )}
        </div>
	    </div>
	  );
	}
}

export default WeatherList;