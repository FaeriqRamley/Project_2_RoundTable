import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from '../actions';

function ShowCounter() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={()=>dispatch(increment(2))}>+2</button>
            <button onClick={()=>dispatch(decrement(3))}>-3</button>
        </div>
    )
}

export default ShowCounter
