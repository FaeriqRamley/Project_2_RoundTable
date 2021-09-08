const selectedPublisherReducer = (state=[],action) => {
    switch(action.type){
        case "ADD_PUBLISHER":
            return [...state,action.payload];
        case "REMOVE_PUBLISHER":
            const newState = [...state];
            const publisherInd = newState.indexOf(action.payload);
            newState.splice(publisherInd,1);
            return newState;
        case "CLEAR_ALL_PUBLISHERS":
            return [];
        default:
            return state;
    }
}

export default selectedPublisherReducer;