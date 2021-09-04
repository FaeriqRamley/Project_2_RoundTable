export const increment = (inputNum=1) => {
    return {
        type: "INCREMENT",
        payload: inputNum
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