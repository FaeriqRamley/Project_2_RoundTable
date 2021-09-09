import React from 'react'
import Comments from './Comments';
import CommentBox from './CommentBox';
import {Row} from 'react-bootstrap';

function CommentDisplay() {
    
    return (
        <React.Fragment>
            <Row><h2>Comments</h2></Row>
            <CommentBox/>
            <Comments />
        </React.Fragment>
    )
}

export default CommentDisplay;
