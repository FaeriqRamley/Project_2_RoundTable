const newsDataReducer = (state=[],action) => {
    switch(action.type){
        case "UPDATE_NEWS_DATA":
            return action.payload;
        case "CLEAR_NEWS_DATA":
            return []
        default:
            return state;
    }
    
}

export default newsDataReducer;