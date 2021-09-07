import React,{useState,useEffect} from 'react'
import Comments from './Comments';
import CommentBox from './CommentBox';
import {useSelector} from 'react-redux';
import db from '../../firebase';
import {collection,query,where,getDocs,onSnapshot} from 'firebase/firestore';

function CommentDisplay() {
    const [commentList,setCommentList] = useState([]);
    const [changeUpdater,setChangeUpdater] = useState(false);
    const [mountedSnapshot,setMountedSnapshot] = useState(false);
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

    const createSnapshot = (inputQuery) => {
        setCommentList([]);
        const unsubscribe = onSnapshot(inputQuery, (snapshot) => {
            snapshot.docChanges().forEach((change,index) => {
                switch(change.type){
                    case "added":
                        setCommentList(prevState => [...prevState,change.doc.data()])
                        break;
                    case "modified":
                        console.log("modified Item")
                        setChangeUpdater(true);
                        break;
                    case "removed":
                        console.log("removed Item")
                        setChangeUpdater(true);
                        break;
                    default:
                        break;
                }
            })
        })
    }

    // useEffect(()=>{})

    let commentQuery = collection(db,"comments");
    useEffect(()=>{
        if (JSON.stringify(activeArticle) !== "{}"){
            commentQuery = query(collection(db,"comments"), where("article","==",activeArticle.title))
        }
    },[activeArticle])

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
            <button onClick={()=> createSnapshot(commentQuery)}>Clicker</button>
        </div>
    )
}

export default CommentDisplay;
