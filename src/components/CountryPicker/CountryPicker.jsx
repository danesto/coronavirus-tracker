import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CounrtyPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchApiCountries = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchApiCountries();
    }, 
    
    [setFetchedCountries]);

    return (
        <FormControl className={styles.container}>
            <NativeSelect deafult="" onChange={ (e) => handleCountryChange(e.target.value) }>
                <option value="global">Worldwide</option>
                {fetchedCountries.map((country, i) => <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CounrtyPicker;