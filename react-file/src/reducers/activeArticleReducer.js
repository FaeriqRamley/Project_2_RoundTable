const activeArticleReducer = (state={},action) => {
    switch(action.type){
        case "UPDATE_ACTIVE_ARTICLE":
            return action.payload;
        case "CLEAR_ACTIVE_ARTICLE":
            return {}
        default:
            return state;
    }
}

export default activeArticleReducer;