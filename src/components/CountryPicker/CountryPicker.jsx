import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';

const defaultCountry = 'US';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountry] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountry(await fetchCountries());
        }
    

    fetchAPI();
}, [setFetchedCountry]);

    return(<FormControl className={styles.FormControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">{defaultCountry}</option>
            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
    </FormControl>)
}

export default CountryPicker;