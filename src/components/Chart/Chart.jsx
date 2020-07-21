import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    // similar way of state: {data}
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetchApi = async () => {
            //const dailyData = await fetchDailyData();
            setDailyData(await fetchDailyData())
        }

        //console.log(dailyData);

        fetchApi();
    });
    //if there is no daily data first day return null
    const lineChart = (
        dailyData.length ? (
        // daily data only available for infected and death
        <Line data ={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed})=>confirmed),
                label: 'Infected', 
                borderColor: '#3333ff', 
                fill: true },
            {
                data: dailyData.map(({deaths})=>deaths),
                label: 'Deaths', 
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)', 
                fill: true 
            }],
        }}
        />) : null
    
    );


    return(<div className={styles.container}>{lineChart}</div>)
}

export default Chart;