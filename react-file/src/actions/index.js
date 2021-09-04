export const addSearchParams = (searchParams) => {

    const paramSplit = searchParams.split("|");
    let searchObj = {};
    for (const param of paramSplit){
        const searchKey = param.split("=")[0];
        const searchValue = param.split("=")[1];

        searchObj[searchKey] = searchValue;
    }
    console.log("dispatching",searchObj);
    return {
        type: "UPDATE_SEARCH_PARAMS",
        payload: searchObj
    }
}

export const decrement = (inputNum=1) => {
    return {
        type: "DECREMENT",
        payload: inputNum
    }
}

export const signIn = () => {
    return {type: "SIGN_IN"}
}

export const signOut = () => {
    return {type: "SIGN_OUT"}
}