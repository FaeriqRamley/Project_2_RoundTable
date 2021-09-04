import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isLogged: loggedReducer,
    counter: counterReducer
})

export default rootReducer;