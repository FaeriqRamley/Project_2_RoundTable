import React,{useState,useEffect} from 'react'
import Comments from './Comments';
import CommentBox from './CommentBox';
import {useSelector} from 'react-redux';

function CommentDisplay() {
    const [commentList,setCommentList] = useState([]);
    const activeArticle = useSelector(state => state.activeArticle);
    
    return (
        <div className="container h-100" style={{border:"1px solid black"}}>
            <div className="row">Comments</div>
            <Comments commentList={commentList}/>
            <CommentBox/>
        </div>
    )
}

export default CommentDisplay;
