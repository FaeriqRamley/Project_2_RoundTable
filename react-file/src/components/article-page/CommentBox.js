import React,{useState,useEffect,useRef} from 'react'
import {useSelector} from 'react-redux'
import db from '../../firebase';
import {collection, addDoc} from 'firebase/firestore';

function CommentBox() {
    const activeArticle = useSelector(state => state.activeArticle);
    const [canPost,setCanPost] = useState(false);
    const usernameRef = useRef();
    const commentRef = useRef();
    const biasRef = useRef();

    const addDataToCommentsDb = async (data) => {
        try{
            await addDoc(collection(db,"comments"),data)
        } catch (err) {
            console.log("error at ", err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            userName: usernameRef.current.value,
            article: activeArticle.title,
            bias: biasRef.current.value,
            content: commentRef.current.value,
            ratings: {
                downvotes: 0,
                upvotes: 0
            },
        }
        
        if(newComment.content.length !== 0){
            addDataToCommentsDb(newComment)
            usernameRef.current.value = "";
            biasRef.current.value = "";
            commentRef.current.value = "";
        } else {
            console.log("Write something in comments!")
        }
        
    }

    useEffect(()=> {
        if (JSON.stringify(activeArticle) === "{}"){
            setCanPost(false);
        } else{
            setCanPost(true);
        }
    },[activeArticle])

    return (
        <React.Fragment>
            <div className="row align-self-end">Leave a Comment</div>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" ref={usernameRef}></input>
                    <label>Comments</label>
                    <input type="text" ref={commentRef}></input>
                    <label>Bias</label>
                    <input type="text" ref={biasRef}></input>
                    <button type="submit" disabled={!canPost}>Post comment</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default CommentBox;
