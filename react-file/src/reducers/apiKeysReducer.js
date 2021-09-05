const apiKeysReducer = (state={newsKey:"test",geoIpKey:""},action) => {
    switch(action.type){
        case "UPDATE_NEWS_KEY":
            console.log("updating news key")
            return {...state, newsKey:action.payload};
        case "UPDATE_IP_KEY":
            return {...state, geoIpKey:action.payload};
        default:
            return state
    }
}

export default apiKeysReducer;