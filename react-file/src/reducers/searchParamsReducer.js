const searchParamsReducer = (state="",action) => {
    switch(action.type){
        case "UPDATE_SEARCH_PARAMS":
            
            return action.payload;
        default:
            return state
    }
}

export default searchParamsReducer;