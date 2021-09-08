import currentUserReducer from "./firebase-reducers/currentUserReducer";
import searchParamsReducer from "./appfunction-reducers/searchParamsReducer";
import newsDataReducer from "./api-reducers/newsDataReducer";
import apiKeysReducer from "./api-reducers/apiKeysReducer";
import selectedPublisherReducer from "./appfunction-reducers/selectedPublisherReducer";
import activeArticleReducer from "./appfunction-reducers/activeArticleReducer";
import commentListReducer from "./firebase-reducers/commentListReducer";
import currentUserStorageReducer from './firebase-reducers/currentUserStorageReducer';
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