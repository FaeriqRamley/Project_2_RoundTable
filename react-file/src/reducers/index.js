import currentUserReducer from "./currentUserReducer";
import searchCountryReducer from "./searchCountryReducer";
import searchParamsReducer from "./searchParamsReducer";
import newsDataReducer from "./newsDataReducer";
import apiKeysReducer from "./apiKeysReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    searchCountry: searchCountryReducer,
    searchParams: searchParamsReducer,
    newsData: newsDataReducer,
    apiKeys: apiKeysReducer
})

export default rootReducer;