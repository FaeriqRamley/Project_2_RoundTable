const currentUserReducer = (state=null,action) => {
    switch(action.type){
        case "ADD_USER":
            return action.payload;
        case "REMOVE_USER":
            return null;
        default:
            return state;
    }
}

export default currentUserReducer;
