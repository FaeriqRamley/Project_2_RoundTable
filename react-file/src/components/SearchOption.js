import React,{useEffect, useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addSearchParams,updateNewsData} from "../actions";

function SearchOption(props) {
    const searchRef = useRef();
    const searchParams = useSelector(state => state.searchParams);
    const newsData = useSelector(state => state.newsData)
    const dispatch = useDispatch();

    const fetchNews = async (newsApiKey,searchParameters) => {
        const url = `https://newsapi.org/v2/everything?q=Singapore&apiKey=${newsApiKey}`
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
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addSearchParams(searchRef.current.value));
    }

    useEffect(()=>{
        fetchNews(props.newsApiKey,searchParams)
    },[searchParams])
    

    return (
        <div> 
            
            <form>
                <label>1. Search your keywords </label>
                <input type="text" ref={searchRef}></input>
                <button onClick={handleClick}>Search</button>
            </form>
            <h3>Search Results: {newsData.length} found</h3>
            <p>{searchParams}</p>
            {newsData.map((item,id) => {
                return (
                <div key={id} style={{border:"1px solid black"}}>
                    <h4>{item.title}</h4>
                    <p>{item.url}</p>
                    <p>{item.content.split("[")[0]}</p>
                </div>)
            })}
        </div>
    )
}

export default SearchOption;
