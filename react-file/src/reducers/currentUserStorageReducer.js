const currentUserStorageReducer = (state={articleFavourite:[],noteStorage:[]},action) => {
    switch(action.type){
        case "UPDATE_USER_STORAGE":
            return {
                ...state,
                articleFavourite: [...action.payload.articleFavourite],
                noteStorage: [...action.payload.noteStorage]
            }
        case "ADD_USER_FAVOURITES":
            return {
                ...state,
                articleFavourite: [...state.articleFavourite,action.payload]
            }
        case "ADD_NOTE_STORAGE":
            return {
                ...state,
                noteStorage: [...state.noteStorage,action.payload]
            }
        default:
            return state

    }
}

export default currentUserStorageReducer;