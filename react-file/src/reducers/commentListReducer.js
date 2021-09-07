const commentList = (state=[],action) => {
    switch(action.type){
        case "ADD_COMMENT":
            return [...state, action.payload];
        case "REMOVE_COMMENT":
            return commentList.filter((item) => item.docID !== action.payload);
        case "CLEAR_COMMENTS":
            return [];
        default:
            return state;
    }
}

export default commentList;