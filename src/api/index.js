import axios from 'axios';

const url= ' https://covid19.mathdro.id/api';

export const fetchData = async () => {
    
    
    try {
        //To see api output
        //const response = await axios.get(url);
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        
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