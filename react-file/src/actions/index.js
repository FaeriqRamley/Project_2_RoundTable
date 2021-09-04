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

export const signIn = () => {
    return {type: "SIGN_IN"}
}

export const signOut = () => {
    return {type: "SIGN_OUT"}
}