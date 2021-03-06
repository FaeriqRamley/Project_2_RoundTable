import React from 'react';
import {useDispatch} from 'react-redux';
import { updateActiveArticle,addComment,removeComment,clearComments, setListener } from '../../actions';
import db from '../../firebase';
import {collection,query,where,onSnapshot} from 'firebase/firestore';
import styles from "./ArticleNavItem.module.css";

function ArticleNavItem(props) {
    const dispatch = useDispatch();

    const createSnapshot = (inputQuery) => {
        if(props.listener){
            props.listener();
        }

        dispatch(clearComments());
        const unsubscribe = onSnapshot(inputQuery, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
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
        <React.Fragment >
            <h6 className={styles.articleLink} onClick={handleClick}>
            {props.article.title}
            </h6>
        </React.Fragment>
    )
}

export default ArticleNavItem;
