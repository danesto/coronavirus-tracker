import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data: { confirmed, recovered, deaths }, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(()=> {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }   

        fetchApi();
    }, []);

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: '#ff2121',
                        fill: true
                    }]
                }}
            />
        ) : null
    );
    
    const barChart = (
        confirmed
        ? (
            <Bar
                data={{
                    labels: ['infected', 'recovered', 'deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            '#2125ff', 
                            '#3aec0d', 
                            '#ff2121',
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options= {{
                    legend: {display: false},
                    title: {display: true, text: `Showing results for: ${country}`}
                }}
            />
        ) : null
    )
    
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;