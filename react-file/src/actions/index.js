export const addSearchParams = (searchParams) => {
    return {
        type: "UPDATE_SEARCH_PARAMS",
        payload: searchParams
    }
}

export const updateSearchCountry = (data) => {
    return {
        type: "UPDATE_SEARCH_COUNTRY",
        payload: data
    }
}

export const updateNewsData = (data) => {
    return {
        type: "UPDATE_NEWS_DATA",
        payload: data
    }
}

export const clearNewsData = (data) => {
    return {
        type: "CLEAR_NEWS_DATA",
    }
}