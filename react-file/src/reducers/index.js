import currentUserReducer from "./currentUserReducer";
import searchCountryReducer from "./searchCountryReducer";
import searchParamsReducer from "./searchParamsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    searchCountry: searchCountryReducer,
    searchParams: searchParamsReducer
})

export default rootReducer;