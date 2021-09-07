import React,{useState,useEffect} from 'react'
import Comments from './Comments';
import CommentBox from './CommentBox';
import {useSelector} from 'react-redux';

function CommentDisplay() {
    const [commentList,setCommentList] = useState([]);
    const activeArticle = useSelector(state => state.activeArticle);

    //fetch data to display in the comment section
    // const fetchData = async (title) => {
    //     console.log("fetching")
    //     setCommentList([]);
    //     const commentQuery = query(collection(db,"comments"), where("article","==",title))
    //     const querySnapshot = await getDocs(commentQuery);
    //     querySnapshot.forEach((doc) => {
    //         setCommentList(prevState => [...prevState,doc.data()])
    //     })
    // }

    // useEffect(()=>{
    //     if (changeUpdater === true && JSON.stringify(activeArticle) !== "{}"){
    //         console.log("Changeupdaterdetected")
    //         fetchData(activeArticle.title);
    //         setChangeUpdater(false);
    //     }
    //     // console.log(mountedSnapshot);
    // },[changeUpdater])

    
    return (
        <div className="container h-100" style={{border:"1px solid black"}}>
            <div className="row">Comments</div>
            <Comments commentList={commentList}/>
            <CommentBox/>
        </div>
    )
}

export default CommentDisplay;
