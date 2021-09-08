import currentUserReducer from "./currentUserReducer";
import searchParamsReducer from "./searchParamsReducer";
import newsDataReducer from "./newsDataReducer";
import apiKeysReducer from "./apiKeysReducer";
import selectedPublisherReducer from "./selectedPublisherReducer";
import activeArticleReducer from "./activeArticleReducer";
import commentListReducer from "./commentListReducer";
import currentUserStorageReducer from './currentUserStorageReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    currentUserStorage: currentUserStorageReducer,
    searchParams: searchParamsReducer,
    newsData: newsDataReducer,
    apiKeys: apiKeysReducer,
    selectedPublishers: selectedPublisherReducer,
    activeArticle: activeArticleReducer,
    commentList: commentListReducer,
    
})

export default rootReducer;