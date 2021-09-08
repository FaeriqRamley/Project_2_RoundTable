import React,{useRef} from 'react'
import inputStyles from "./input.module.css"
import {useDispatch} from 'react-redux';
import {addSearchParams} from '../../actions';
function ParamsInput() {
    const keywordRef = useRef("")
    const sourceRef = useRef("")
    const languageRef = useRef("")
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {};
        newEntry[keywordRef.current.id] = keywordRef.current.value;
        newEntry[sourceRef.current.id] = sourceRef.current.value;
        newEntry[languageRef.current.id] = languageRef.current.value;
        dispatch(addSearchParams(newEntry))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Keywords</label>
            <input id="keywords" styles={{inputStyles}} type="text" ref={keywordRef}></input>
            <label>Countries</label>
            <input id="source" styles={{inputStyles}} type="text" ref={sourceRef}></input>
            <label>Language</label>
            <input id="language" styles={{inputStyles}} type="text" ref={languageRef}></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default ParamsInput;
