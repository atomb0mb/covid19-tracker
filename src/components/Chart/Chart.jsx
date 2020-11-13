import React, {useState, useEffect} from 'react';
// import { fetchDailyData, fetchUSData } from '../../api';
import { fetchDailyData } from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data, country}) => {
    // similar way of state: {data}
    const [dailyData, setDailyData] = useState([]);
    // const [dailyData, setUSData] = useState([]);

    // console.log(dailyData);

    useEffect(()=>{
        const fetchApi = async () => {
            //const dailyData = await fetchDailyData();
            setDailyData(await fetchDailyData())
            //setUSData(await fetchUSData())
        }

        //console.log(dailyData);

        fetchApi();
    }, []);
    //if there is no daily data first day return null
    // const lineChart = (
    //     dailyData.length ? (
    //     // daily data only available for infected and death
    //     <Line data ={{
    //         labels: dailyData.map(({date}) => date),
    //         datasets: [{
    //             data: dailyData.map(({confirmed})=>confirmed),
    //             label: 'Infected', 
    //             borderColor: '#3333ff', 
    //             fill: true },
    //         {
    //             data: dailyData.map(({deaths})=>deaths),
    //             label: 'Deaths', 
    //             borderColor: 'red',
    //             backgroundColor: 'rgba(255, 0, 0, 0.5)', 
    //             fill: true 
    //         }],
    //     }}
    //     options={{
    //         scales: {
    //                   yAxes: [{
    //                     scaleLabel: {
    //                       display: true,
    //                       responsive: true,
    //                       labelString: 'Number of People',
    //                       fontColor: '#000000',
    //                       fontSize: 14
    //                     }
    //                   }],
    //                 //   xAxes: [ {
    //                 //     //type: 'time',
    //                 //     display: true,
    //                 //     scaleLabel: {
    //                 //       display: true,
    //                 //       labelString: 'Date',
    //                 //       fontColor: '#000000',
    //                 //       fontSize: 14
    //                 //     }}],
    //                 }     
    //     }}
    //     />) : null
    
    // );

    // console.log(data.confirmed);
    // console.log(data.recovered);

    const barChart = (
        data.confirmed ? (<Bar data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [data.confirmed.value, data.recovered.value, data.deaths.value]
            }]
        }}
        options={{
            legend: {display: false },
            title: {display: true, text: `Current state in ${country}`, fontSize: 16},
        }}
        />) : null
    );


    // return(<div className={styles.container}>{country ? barChart: lineChart}</div>)
    return(<div className={styles.container}>{barChart}</div>)
}

export default Chart;