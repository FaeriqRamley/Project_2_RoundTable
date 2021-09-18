import React,{useState,useEffect,useRef} from 'react'
import {useSelector} from 'react-redux'
import db from '../../firebase';
import {collection, addDoc} from 'firebase/firestore';
import {Row,Col} from 'react-bootstrap';
import styles from "./CommentBox.module.css";

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
            biasRef.current.value = "Neutral";
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
        <Row>
            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <Row className="mb-2"><Col>
                    <textarea rows="2" type="text" ref={commentRef} placeholder="What do you think of this article? Make sure to indicate where you stand"/>
                </Col></Row>
                <Row className="m-0 justify-content-md-end" style={{width:"100%"}}>
                    <Col md={4} className="p-0">
                        <select id="biasSelect" ref={biasRef} style={{width:"40%",height:"100%"}}>
                            <option value="Neutral">Neutral</option>
                            <option value="For">For</option>
                            <option value="Against">Against</option>
                        </select>
                        <button type="submit" disabled={!canPost} style={{width:"60%",height:"100%"}}>Comment</button>
                    </Col>
                
                
                </Row>
            </form>
        </Row>
    )
}

export default CommentBox;
