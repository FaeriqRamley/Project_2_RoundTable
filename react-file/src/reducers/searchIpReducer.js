const searchIpReducer = (state={country:"",countryCode:"",countryFlag:""},action) => {
    switch(action.type){
        case "CHANGE_SEARCH_IP":
            return action.payload
        case "CLEAR_SEARCH_IP":
            return {country:"",countryCode:"",countryFlag:""}
        default:
            return state
    }
}

export default searchIpReducer;