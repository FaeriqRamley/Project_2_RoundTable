const newsDataReducer = (state={},action) => {
    switch(action.type){
        case "UPDATE_NEWS_DATA":
            return action.payload;
        default:
            return state;
    }
    
}