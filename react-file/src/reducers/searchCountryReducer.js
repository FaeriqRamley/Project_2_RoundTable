const searchCountryReducer = (state={country:"",countryCode:"",countryFlag:""},action) => {
    switch(action.type){
        // case "FETCH_WITH_IP":
        //     let output = state;

        //     const fetchData = async (payload) => {
        //         try{
        //             const res = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${payload}`)
        //             const data = await res.json()

        //             const {country,country_code,flag} = data;
        //             console.log({country,countryCode:country_code,countryFlag:flag.png})
        //             output = {...state, country,countryCode:country_code,countryFlag:flag.png}
        //         } catch (err) {
        //             console.log(err.message)
        //         }
        //     }
        //     console.log(output)
        //     return output
        case "UPDATE_SEARCH_COUNTRY":
            return action.payload
        case "CLEAR_SEARCH_COUNTRY":
            return {country:"",countryCode:"",countryFlag:""}
        default:
            return state
    }
}

export default searchCountryReducer;