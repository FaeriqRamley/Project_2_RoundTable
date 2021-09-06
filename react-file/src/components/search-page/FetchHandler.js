import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {updateNewsData} from "../../actions";

function FetchHandler() {
    const searchParams = useSelector(state => state.searchParams)
    const apiKeys = useSelector(state => state.apiKeys)
    const dispatch = useDispatch();

    useEffect(() => {
        
        const fetchNews = async (newsApiKey,searchParams) => {
            let searchString = "";
            for (const [key,value] of Object.entries(searchParams)){
                if (key !== "keywords"){
                    searchString += `&${key}=${value}`;
                } else {
                    searchString += `&q=${value}`
                }
            }

            console.log("running fetch news")
            const url = `https://newsapi.org/v2/everything?apiKey=${newsApiKey}${searchString}`
            console.log(url);
            try {
                const res = await fetch(url);
                const data = await res.json();
                dispatch(updateNewsData(data.articles))
                console.log(data.articles)
            } catch (err) {
                console.log(err.message)
            }
        }
    
        //ensure that fetchNews only runs if at least one of the entry is empty
        for (const value of Object.values(searchParams)){
            if (value !== ""){
                fetchNews(apiKeys.newsKey,searchParams)
            }
        }
        
    },[searchParams])

    return (
        <React.Fragment></React.Fragment>
    )
}

export default FetchHandler;
