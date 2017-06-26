import React, { Component } from 'react'; 
import Form from './components/Form';
import CityList from './components/CityList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Form />
        <CityList />
      </div>
    );
  }
}

export default App;
