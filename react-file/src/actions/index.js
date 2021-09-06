export const updateNewsKey = (inputKey) => {
    return {
        type: "UPDATE_NEWS_KEY",
        payload: inputKey
    }
}

export const updateIPKey = (inputKey) => {
    console.log("DispatchingIPKey")
    return {
        type: "UPDATE_IP_KEY",
        payload: inputKey
    }
}

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

export const updateNewsData = (articleArr) => {
    return {
        type: "UPDATE_NEWS_DATA",
        payload: articleArr
    }
}

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