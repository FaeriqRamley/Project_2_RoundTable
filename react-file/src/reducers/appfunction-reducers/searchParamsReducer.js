const searchParamsReducer = (state={keywords:'',country:'',language:''},action) => {
    switch(action.type){
        case "CLEAR_SEARCH_PARAMS":
            return {keywords:'',country:'',language:''};
        case "ADD_SEARCH_PARAMS":
            const payload = {...action.payload};

            const keywordStr = payload.keywords;
            console.log(keywordStr);
            //Split by commas
            const keywordList = keywordStr.split(",");
            //add quotation marks
            for (let i=0; i<keywordList.length;i++){
                keywordList[i] = '"' + keywordList[i] + '"';
            }
            //Combine strings with " AND "
            const newKeywordStr = keywordList.join(" AND ")
            //URI Encode
            const outputStr = encodeURI(newKeywordStr)

            payload["keywords"] = outputStr

            return payload;
        default:
            return state;
    }
}

export default searchParamsReducer;