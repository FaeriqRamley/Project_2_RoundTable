const searchParamsReducer = (state="",action) => {
    switch(action.type){
        case "UPDATE_SEARCH_PARAMS":
            const searchParams = action.payload;
            console.log(searchParams);
            const paramSplit = searchParams.split("|");
            let searchObj = {};

            if (paramSplit.length>1){
                for (const param of paramSplit){
                    const searchKey = param.split("=")[0];
                    const searchValue = param.split("=")[1];
            
                    searchObj[searchKey] = searchValue;
                }
            } else {
                searchObj["keywords"] = searchParams;
            }

            let searchUrl = "";

            for (const [key,value] of Object.entries(searchObj)){
                searchUrl += `&${key}=${value}`;
            }

            return searchUrl;
        default:
            return state
    }
}

export default searchParamsReducer;