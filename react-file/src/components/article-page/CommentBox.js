import React,{useState,useEffect,useRef} from 'react'
import {useSelector} from 'react-redux'
import db from '../../firebase';
import {collection, addDoc} from 'firebase/firestore';

function CommentBox() {
    const activeArticle = useSelector(state => state.activeArticle);
    const currentUser = useSelector(state => state.currentUser)
    const [canPost,setCanPost] = useState(false);
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
            userName: currentUser.displayName,
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
            biasRef.current.value = "";
            commentRef.current.value = "";
        } else {
            console.log("Write something in comments!")
        }
        
    }

    useEffect(()=> {
        if (JSON.stringify(activeArticle) === "{}" || currentUser === null){
            setCanPost(false);
        } else{
            setCanPost(true);
        }
    },[activeArticle,currentUser])

    return (
        <React.Fragment>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={commentRef} placeholder="How reliable is this source?"></input>
                    <label>Bias</label>
                    <input type="text" ref={biasRef}></input>
                    <button type="submit" disabled={!canPost}>{canPost? "Post Comment":"Sign in & Select Article"}</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default CommentBox;
