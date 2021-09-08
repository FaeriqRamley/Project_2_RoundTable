const apiKeysReducer = (state={newsKey:"test"},action) => {
    switch(action.type){
        case "UPDATE_NEWS_KEY":
            return {...state, newsKey:action.payload};
        default:
            return state
    }
}

export default apiKeysReducer;