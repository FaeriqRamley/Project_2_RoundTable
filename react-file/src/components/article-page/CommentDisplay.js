import React from 'react'
import Comments from './Comments';
import CommentBox from './CommentBox';

function CommentDisplay() {
    
    return (
        <div className="container h-100" style={{border:"1px solid black"}}>
            <div className="row">Comments</div>
            <Comments />
            <CommentBox/>
        </div>
    )
}

export default CommentDisplay;
