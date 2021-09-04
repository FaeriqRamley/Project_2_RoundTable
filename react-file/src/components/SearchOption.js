import React,{useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addSearchParams} from "../actions";
function SearchOption() {
    const searchRef = useRef();
    const searchParams = useSelector(state => state.searchParams)
    const dispatch = useDispatch()
    // const fetchNews = async () => {
    //     const url = `http://api.mediastack.com/v1/news?access_key=${props.newsApiKey}&limit=3&countries=kr`
    //     console.log(url);

    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();

    //         props.setNewsData(data);
    //         console.log(props.newsData);
    //     } catch (err) {
    //         console.log(err.message)
    //     }
    // }
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(typeof searchRef.current.value);
        dispatch(addSearchParams(searchRef.current.value));
    }
    

    return (
        <div> 
            <p>{searchParams}</p>
            <form>
                <label>1. Search your keywords </label>
                <input type="text" ref={searchRef}></input>
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

export default SearchOption;
