import React from 'react';
import styles from './App.module.css'; // styles.container to make sure there is no interferace from other css file

//Unique and cleanier way to import
import {Cards, Chart, CountryPicker, Footer } from './components';
// Similar to this
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
// .....footer ""
import{ fetchData } from './api';
import pageimg from './images/c19v4.png';

class App extends React.Component {
 
  // similar to constructor
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    //console.log(fetchData);
    this.setState({data: fetchedData});
  }

  // change the state of country
  handleCountryChange = async (country) => {
    //check country selected
    //console.log(country);
    const fetchedCountryData = await fetchData(country); // to display change on card
    // output selected country data
    // console.log(fetchedCountryData);
    this.setState({data: fetchedCountryData, country: country});
  }

  render() {

    const {data, country} = this.state;

    return (
      <div className={styles.container} >
        <img className={styles.image} src={pageimg} alt="COVID-19"></img>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart data={data} country={country}></Chart>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;