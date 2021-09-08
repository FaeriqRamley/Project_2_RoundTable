//// API KEY ACTIONS HERE
export const updateNewsKey = (inputKey) => {
    return {
        type: "UPDATE_NEWS_KEY",
        payload: inputKey
    }
}

//// NEWSDATA ACTIONS HERE
export const updateNewsData = (articleArr) => {
    return {
        type: "UPDATE_NEWS_DATA",
        payload: articleArr
    }
}

//// USER ACTIONS HERE
export const addUser = (userInfo) => {
    return {
        type: "ADD_USER",
        payload: userInfo
    }
}

export const removeUser = () => {
    return {
        type: "REMOVE_USER",
    }
}

//// USER STORAGE ACTIONS HERE
export const updateUserStorage = (payload) => {
    return {
        type: "UPDATE_USER_STORAGE",
        payload
    }
}

export const addUserFavourites = (newUrl) => {
    return {
        type: "ADD_USER_FAVOURITES",
        payload: newUrl
    }
}

export const addUserNotes = (newNote) => {
    return {
        type: "ADD_NOTE_STORAGE",
        payload: newNote
    }
}

//// SEARCHPARAMS ACTIONS HERE
export const addSearchParams = (searchParams) => {
    return {
        type: "ADD_SEARCH_PARAMS",
        payload: searchParams
    }
}

export const clearSearchParams = (searchParams) => {
    return {
        type: "CLEAR_SEARCH_PARAMS",
    }
}



//// SELECTEDPUBLISHER ACTIONS HERE
export const addPublisher = (publisher) => {
    return {
        type: "ADD_PUBLISHER",
        payload: publisher
    }
}

export const removePublisher = (publisher) => {
    return {
        type: "REMOVE_PUBLISHER",
        payload: publisher
    }
}

export const clearAllPublisher = () => {
    return {
        type: "CLEAR_ALL_PUBLISHER",
    }
}

//// ACTIVE ARTICLE ACTIONS HERE
export const updateActiveArticle = (newArticle) => {
    return {
        type: "UPDATE_ACTIVE_ARTICLE",
        payload: newArticle
    }
}


export const clearActiveArticle = () => {
    return {
        type: "CLEAR_ACTIVE_ARTICLE",
    }
}

//// COMMENT LIST ACTIONS HERE
export const addComment = (newComment) => {
    return {
        type: "ADD_COMMENT",
        payload: newComment
    }
}

export const clearComments = () => {
    return {
        type: "CLEAR_COMMENTS",
    }
}

export const removeComment= (commentID) => {
    return {
        type: "REMOVE_COMMENT",
        payload: commentID
    }
}


