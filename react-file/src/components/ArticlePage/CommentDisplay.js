import React,{useState,useEffect} from 'react'
import Comments from './Comments';
import {useSelector} from 'react-redux';
import db from '../../firebase';
import {collection,doc,getDocs} from 'firebase/firestore';

function CommentDisplay() {
    const [commentList,setCommentList] = useState([]);
    const activeArticle = useSelector(state => state.activeArticle);

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db,"comments"));
        querySnapshot.forEach((doc) => {
            setCommentList(prevState => [...prevState,doc.data()])
        }
    )}
    useEffect(()=>{
        fetchData();
    },[activeArticle])

    return (
        <div className="container h-100" style={{border:"1px solid black"}}>
            <div className="row">Comments</div>
            <Comments commentList={commentList}/>
        </div>
    )
}

export default CommentDisplay;
