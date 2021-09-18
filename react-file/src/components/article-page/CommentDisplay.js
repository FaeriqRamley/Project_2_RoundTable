import React from 'react'
import Comments from './Comments';
import CommentBox from './CommentBox';
import {Row,Col} from 'react-bootstrap';

function CommentDisplay() {
    
    return (
        <React.Fragment>
            <Row>
                <Col style={{textAlign:"left"}}><h3>Comments</h3></Col>
            </Row>
            <CommentBox/>
            <Row className="centered">
                <Comments />
            </Row>
            
        </React.Fragment>
    )
}

export default CommentDisplay;
