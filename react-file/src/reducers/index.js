import currentUserReducer from "./currentUserReducer";
import searchCountryReducer from "./searchCountryReducer";
import searchParamsReducer from "./searchParamsReducer";
import newsDataReducer from "./newsDataReducer";
import apiKeysReducer from "./apiKeysReducer";
import selectedPublisherReducer from "./selectedPublisherReducer";
import activeArticleReducer from "./activeArticleReducer";
import commentListReducer from "./commentListReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    searchCountry: searchCountryReducer,
    searchParams: searchParamsReducer,
    newsData: newsDataReducer,
    apiKeys: apiKeysReducer,
    selectedPublishers: selectedPublisherReducer,
    activeArticle: activeArticleReducer,
    commentList: commentListReducer
})

export default rootReducer;