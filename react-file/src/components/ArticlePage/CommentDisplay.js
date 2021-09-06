import React from 'react'
import Comments from './Comments';

function CommentDisplay() {
    return (
        <div className="container h-100" style={{border:"1px solid black"}}>
            <div className="row">Comments</div>
            <Comments/>
        </div>
    )
}

export default CommentDisplay;
