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
 
  // similar to constructor
  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    //console.log(fetchData);
    this.setState({data: fetchedData});
  }

  render() {

    const {data} = this.state;

    return (
      <div className={styles.container} >
        <Cards data={data}/>
        <CountryPicker></CountryPicker>
        <Chart></Chart>
        <h1>App</h1>
      </div>
    );
  }
}

export default App;