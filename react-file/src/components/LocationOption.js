import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {updateSearchCountry} from '../actions';

function LocationOption(props) {
    const searchCountry = useSelector(state => state.searchCountry);
    const dispatch = useDispatch();

    const fetchIPData = async (geoApiKey) => {
        try {
            const res = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${geoApiKey}`)
            const data = await res.json()
            const {country,country_code,flag} = data;
            dispatch(updateSearchCountry({country,countryCode:country_code,countryFlag:flag.png}))
        } catch (err){
            console.log(err.message)
        }

    } 

    useEffect(() => {
        // fetchIPData(props.geoApiKey)
    }, [])


    return (
        <div>
            <h4>Location option</h4>
            <p>Country: {searchCountry.country}</p>
            <p>Country code: {searchCountry.countryCode}</p>
            <p>Country flag: {searchCountry.countryFlag}</p>
        </div>
    )
}

export default LocationOption;
