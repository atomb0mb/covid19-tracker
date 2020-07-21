import React from 'react';
import styles from './App.module.css';

import {Cards, Chart, CountryPicker } from './components';
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
        <h1>App</h1>
      </div>
    )
  }
}

export default App;