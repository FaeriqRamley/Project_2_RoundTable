import React,{useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addSearchParams} from "../actions";
function SearchOption() {
    const searchRef = useRef();
    // const fetchIP = async () => {
    //     const res = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${props.geoApiKey}`)
    //     const data = await res.json()
        
    //     props.setUserIP(data)
    //     console.log(data)
    // }
    const searchParams = useSelector(state => state.searchParams)
    const dispatch = useDispatch()
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
