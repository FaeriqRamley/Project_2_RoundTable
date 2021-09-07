const databaseListenerReducer = (state=0,action) => {
    switch(action.type){
        case "SET_LISTENER":
            return action.payload;
        case "CLEAR_LISTENER":
            return 0;
        default:
            return 0;
    }
}

export default databaseListenerReducer;