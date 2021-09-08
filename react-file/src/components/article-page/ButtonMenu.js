import React from 'react'
import styles from './buttonMenu.module.css'
import db from '../../firebase';
import {doc,updateDoc,getDoc} from 'firebase/firestore';
import {useSelector} from 'react-redux';
import {getAuth} from 'firebase/auth';
function ButtonMenu() {
    const activeArticle = useSelector(state => state.activeArticle);

    const addToFav = async (favArticle) => {
        const uid = getAuth().currentUser.uid;
        const docSnap = await getDoc(doc(db,"userStorage",uid));
        const favArr = [...docSnap.data().articleFavourite];
        favArr.push({title:favArticle.title,url:favArticle.url});
        await updateDoc(doc(db,"userStorage",uid),{
            articleFavourite: favArr
        });
    }

    const handleSaveToFav = (e) => {
        e.preventDefault();
        addToFav(activeArticle)
    }

    return (
        <div className={styles.menu}>
            <button onClick={handleSaveToFav}>Save article to favourites</button>
            <button>Select different sources</button>
            <button>Make a new search</button>
        </div>
    )
}

export default ButtonMenu
