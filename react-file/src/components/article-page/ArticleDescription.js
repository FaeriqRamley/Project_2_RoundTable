import React from 'react';
import {Button,Row,Col} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {getDoc,doc,updateDoc} from 'firebase/firestore';
import db from '../../firebase';
function ArticleDescription() {
    const activeArticle = useSelector(state => state.activeArticle)
    const currentUser = useSelector(state => state.currentUser)
    const addToFav = async (favArticle) => {
        if (currentUser === null){
            console.log("Log in to save articles")
            return null
        }
        
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

    return (
        <React.Fragment>
            <Row className="align-items-sm-center">
                <Col sm={3} style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <h6 style={{margin:"0"}}>{activeArticle.source.name}</h6>
                </Col>
                <Col sm={{span:2,offset:7}} style={{padding:"10px"}}>
                    <Button variant="outline-warning" onClick={handleSaveToFav} style={{borderRadius:"0",borderColor:"#A38915",width:"100%",padding:"0px"}}>
                        <span style={{fontSize:"16px",paddign:"0px",color:"#A38915"}}>Favourite Article</span>
                    </Button>
                </Col>
            </Row>
            <Row><Col>
                <h5>{activeArticle.title}</h5>
            </Col></Row>
            <Row><Col>
                <p style={{marginBottom:'10px'}}>Published on: {activeArticle.publishedAt.split("T")[0]}</p>
            </Col></Row>
            <Row><Col>
                <h6>{activeArticle.description.substring(0,200)} {activeArticle.description.length>200 ? "...":" "}
                    <a href={activeArticle.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </h6>
            </Col></Row>
        </React.Fragment>
    )
}

export default ArticleDescription;
