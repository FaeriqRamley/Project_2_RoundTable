import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {updateSearchCountry} from '../actions';

function LocationOption(props) {
    const searchCountry = useSelector(state => state.searchCountry);
    const dispatch = useDispatch();

    const fetchIPData = async (geoApiKey) => {
        try {
            console.log("fetching data")
            const res = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${geoApiKey}`)
            const data = await res.json()
            
            const {country,country_code,flag} = data;
            console.log("fetching data")
            dispatch(updateSearchCountry({country,countryCode:country_code,countryFlag:flag.png}))
        } catch (err){
            console.log(err.message)
        }

    } 

    useEffect(() => {
        // fetchIPData(props.geoApiKey)
        console.log(searchCountry)
    }, [])
    // const fetchNews = async () => {
    //     const url = `http://api.mediastack.com/v1/news?access_key=${props.newsApiKey}&limit=3&countries=kr`
    //     console.log(url);

    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();

    //         props.setNewsData(data);
    //         console.log(props.newsData);
    //     } catch (err) {
    //         console.log(err.message)
    //     }
    // }

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
