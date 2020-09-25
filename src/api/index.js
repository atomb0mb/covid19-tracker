import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let dynamicUrl = url;

    //If there is a country selected
    if(country) {
        //build the url
        dynamicUrl = `${url}/countries/${country}`;
    }


    try {
        //To see api output
        //const response = await axios.get(url);
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(dynamicUrl);
        
        // const modifiedData = {
        //     confirmed,
        //     recovered,
        //     deaths,
        //     lastUpdate
        // }
        // // console.log('apidata: ')
        // // console.log(modifiedData);
        // return modifiedData;
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        
    }


}

export const fetchUSData = async () => {

    try {
        // new api for US as default
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(`${url}/countries/US`);
        
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        
    }


}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        //console.log(data);

        const modifiedData = data.map((dailyData) => (
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,

            }            
        ));

        return modifiedData;
        
    } catch (error) {

    }
    
}

export const fetchCountries = async () => {
    try {
        const {data: {countries} } = await axios.get(`${url}/countries`);
        //console.log(response);
        return countries.map((country) => country.name);
    }catch(error){

    }
}
