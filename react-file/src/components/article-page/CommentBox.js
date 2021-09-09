import React,{useState,useEffect,useRef} from 'react'
import {useSelector} from 'react-redux'
import db from '../../firebase';
import {collection, addDoc} from 'firebase/firestore';
import {Row,Col,Form} from 'react-bootstrap';

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
        <Row>
            <form onSubmit={handleSubmit}>
                <Row className="mb-1"><Col>
                    <input type="text" ref={commentRef} placeholder="How reliable is this source?" style={{width:"80%"}}/>
                </Col></Row>
                <Row className="m-auto justify-content-md-end" style={{width:"80%"}}>
                    <Col md={3} className="p-0">
                        <input type="text" ref={biasRef} placeholder="Your bias?" style={{width:"100%"}}></input>
                    </Col>
                    <Col md={3} className="p-0">
                        <button type="submit" disabled={!canPost} style={{width:"100%"}}>{canPost? "Post":"Can't Post"}</button>
                    </Col>
                
                
                </Row>
            </form>
        </Row>
    )
}

export default CommentBox;
