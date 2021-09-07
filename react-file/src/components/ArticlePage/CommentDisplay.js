import React,{useState,useEffect} from 'react'
import Comments from './Comments';
import CommentBox from './CommentBox';
import {useSelector} from 'react-redux';
import db from '../../firebase';
import {collection,query,where,getDocs,onSnapshot} from 'firebase/firestore';

function CommentDisplay() {
    const [commentList,setCommentList] = useState([]);
    const [changeUpdater,setChangeUpdater] = useState("");
    const activeArticle = useSelector(state => state.activeArticle);

    //fetch data to display in the comment section
    const fetchData = async (title) => {
        setCommentList([]);
        const commentQuery = query(collection(db,"comments"), where("article","==",title))
        const querySnapshot = await getDocs(commentQuery);
        querySnapshot.forEach((doc) => {
            setCommentList(prevState => [...prevState,doc.data()])
        }
    )}

    useEffect(()=>{
        const unsubscribe = onSnapshot(collection(db,"comments"), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                switch(change.type){
                    case "added":
                        console.log("added item")
                        const lastId = snapshot.docChanges()[snapshot.docChanges().length-1].doc.id;
                        if(change.doc.id===lastId){
                            setChangeUpdater(change.doc.data());
                        }
                        break;
                    case "modified":
                        console.log("modified Item")
                        setChangeUpdater(change.doc.data());
                        break;
                    case "removed":
                        console.log("removed Item")
                        setChangeUpdater(change.doc.data());
                        break;
                    default:
                        break;
                }
            })
        })
    },[])

    useEffect(()=>{
        if (JSON.stringify(activeArticle) !== "{}"){
            fetchData(activeArticle.title);
        }
    },[activeArticle])

    useEffect(()=>{
        console.log("changeUpdater running");
        if (JSON.stringify(activeArticle) !== "{}"){
            fetchData(activeArticle.title);
        }
    },[changeUpdater])

    return (
        <div className="container h-100" style={{border:"1px solid black"}}>
            <div className="row">Comments</div>
            <Comments commentList={commentList}/>
            <CommentBox/>
        </div>
    )
}

export default CommentDisplay;
