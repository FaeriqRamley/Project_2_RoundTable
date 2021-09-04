const searchParamsReducer = (state="",action) => {
    switch(action.type){
        case "UPDATE_SEARCH_PARAMS":
            const payload = action.payload;
            let searchUrl = "";

            for (const [key,value] of Object.entries(payload)){
                searchUrl += `&${key}=${value}`;
            }

            return searchUrl;
        default:
            return state
    }
}

export default searchParamsReducer;