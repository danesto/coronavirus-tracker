import axios from 'axios';

const API_URL = 'https://covid19.mathdro.id/api';

// FETCH TOTAL COVID 19 CASES
export const fetchData = async (country) => {

    let reqUrl = API_URL;
    if(country) {
        reqUrl = `${API_URL}/countries/${country}`;
    }

    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(reqUrl);
        
        return { confirmed, recovered, deaths,lastUpdate };

    } catch(err) {
        console.error(err);
    }
}

// FETCH DAILY COVID 19 CASES
export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${API_URL}/daily`);

        const modifiedData = data.map((dailyData) => ({ 
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;

    } catch(err) {
        console.log(err);
    }
}

// FETCH COUNTRIES WITH COVID 19 INFO
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${API_URL}/countries`);
        
        return countries.map((country) => country.name);
    } catch(err) {
        console.error(err);
    }
}