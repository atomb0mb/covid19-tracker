import React from 'react';
import styles from './App.module.css'; // styles.container to make sure there is no interferace from other css file

//Unique and cleanier way to import
import {Cards, Chart, CountryPicker } from './components';
// Similar to this
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import{ fetchData } from './api';

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container} >
        <Cards></Cards>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
        <h1>App</h1>
      </div>
    )
  }
}

export default App;