import React from 'react'
import styles from './buttonMenu.module.css'
import db from '../../firebase';
import {doc,updateDoc,getDoc} from 'firebase/firestore';
import {useSelector,useDispatch} from 'react-redux';
import {clearActiveArticle,clearSearchParams,clearNewsData,clearAllPublishers} from '../../actions';
import {useHistory} from 'react-router-dom';
import {ButtonGroup,Button} from 'react-bootstrap';

function ButtonMenu() {
    const activeArticle = useSelector(state => state.activeArticle);
    const currentUser = useSelector(state => state.currentUser);
    const history = useHistory();
    const dispatch = useDispatch();

    const addToFav = async (favArticle) => {
        const uid = currentUser.uid;
        const docSnap = await getDoc(doc(db,"userStorage",uid));
        const favArr = [...docSnap.data().articleFavourite];

        //Check if article is already favourited
        let articleFound = 0;
        for (const article of favArr){
            if (article.title === favArticle.title && article.url === favArticle.url){
                articleFound = 1;
                break;
            }
        }

        if (!articleFound){
            favArr.push({title:favArticle.title,url:favArticle.url});
            await updateDoc(doc(db,"userStorage",uid),{
                articleFavourite: favArr
            });
        } else {
            console.log("article already favourited!")
        }
        
    }

    const handleSaveToFav = (e) => {
        e.preventDefault();
        if (JSON.stringify(activeArticle) !== "{}"){
            addToFav(activeArticle);
        } else {
            console.log("there's no article to save!");
        }
        
    }

    const handleSelectDiffSource = (e) => {
        e.preventDefault();
        dispatch(clearActiveArticle());
        history.push("/")
    }

    const handleMakeNewSearch = (e) => {
        e.preventDefault();
        dispatch(clearActiveArticle());
        dispatch(clearSearchParams());
        dispatch(clearAllPublishers());
        dispatch(clearNewsData());
        history.push("/")
    }

    return (
        // <div className={styles.menu}>
        //     <button onClick={handleSaveToFav} disabled={!currentUser}>Save article to favourites</button>
        //     <button onClick={handleSelectDiffSource}>Select different sources</button>
        //     <button onClick={handleMakeNewSearch}>Make a new search</button>
        // </div>
        <ButtonGroup aria-label="Menu Buttons" style={{marginTop:"0px"}}>
            <Button variant="outline-primary" onClick={handleMakeNewSearch} style={{borderRadius:"0"}}>
                <span style={{fontSize:"15px"}}>Make A New Search</span>
            </Button>
            <Button variant="outline-primary" onClick={handleSelectDiffSource}>
                <span style={{fontSize:"15px"}}>Choose other sources</span>
            </Button>
            <Button variant="outline-warning" onClick={handleSaveToFav} style={{borderRadius:"0"}}>
                <span style={{fontSize:"15px"}}>Favourite Article</span>
            </Button>
        </ButtonGroup>
    )
}

export default ButtonMenu
