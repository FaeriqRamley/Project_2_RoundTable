import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { updateActiveArticle,addComment,removeComment,clearComments, setListener } from '../../actions';
import db from '../../firebase';
import {collection,query,where,getDocs,onSnapshot} from 'firebase/firestore';

function ArticleNavItem(props) {
    const activeArticle = useSelector(state => state.activeArticle)
    const databaseListener = useSelector(state => state.databaseListener)
    const dispatch = useDispatch();

    const createSnapshot = (inputQuery) => {
        if(props.listener){
            props.listener();
        }

        dispatch(clearComments());
        const unsubscribe = onSnapshot(inputQuery, (snapshot) => {
            snapshot.docChanges().forEach((change,index) => {
                switch(change.type){
                    case "added":
                        const newComment = change.doc.data()
                        newComment["docID"] = change.doc.id
                        dispatch(addComment(newComment))
                        break;
                    case "modified":
                        console.log("modified Item")
                        break;
                    case "removed":
                        console.log("removed Item")
                        dispatch(removeComment(change.doc.id));
                        break;
                    default:
                        break;
                }
            })
        })

        props.setListener(()=>unsubscribe);
    }

    const handleClick = () => {
        dispatch(updateActiveArticle(props.article));
        createSnapshot(query(collection(db,"comments"), where("article","==",props.article.title)))
    }
    
    return (
        <p>
            <a href={props.article.url} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            {props.article.title}
            </a>
        </p>
    )
}

export default ArticleNavItem;
