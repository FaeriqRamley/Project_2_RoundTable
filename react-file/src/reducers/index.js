import currentUserReducer from "./currentUserReducer";
import searchIpReducer from "./searchIpReducer";
import searchParamsReducer from "./searchParamsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    searchIP: searchIpReducer,
    searchParams: searchParamsReducer
})

export default rootReducer;