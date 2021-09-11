import React from 'react';
import ArticleNav from '../components/article-page/ArticleNav';
import ButtonMenu from '../components/article-page/ButtonMenu';
import ArticleDescription from '../components/article-page/ArticleDescription';
import CommentDisplay from '../components/article-page/CommentDisplay';
import Notepad from '../components/article-page/Notepad';
import {Container,Row,Col,Image} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import './ArticlePage.css';

function ArticlePage() {
    const activeArticle = useSelector(state => state.activeArticle)
    console.log(activeArticle);
    return (
        <Container fluid style={{textAlign:"center"}}>
            <Row className="centered" style={{width:"50%"}}>
                <Col>
                    <ButtonMenu/>
                </Col>
            </Row>
            <Row className="mx-auto my-2" style={{width:"85%",height:"300px"}}>
                
                <Col sm={4} md={4} style={{display:"flex",justifyContent:"center",flexDirection:"column",backgroundImage:'url("./RoundTable.png")',backgroundSize:"contain",backgroundPosition:"center",height:"300px",maxWidth:"300px",padding:"0px",border:"2px solid black",borderRadius:"0.1rem"}}>
                    <Image src={activeArticle.image} style={{objectFit:"cover",height:"100%",width:"100%"}}/>
                </Col>
                <Col sm={1} md={5} style={{textAlign:"left",backgroundColor:"#C8D3DE"}}>
                    {JSON.stringify(activeArticle)!=="{}" ? <ArticleDescription/> : <h3>Select an article</h3>}
                </Col>
                <Col sm={4} md={{span:3,offset:1}} style={{overflowY:"auto",height:"300px"}}><ArticleNav/></Col>
            </Row>
            <Row style={{width:"95%"}}>
                <Col sm={4} md={6}><CommentDisplay/></Col>
                <Col sm={8} md={6} style={{minHeight:"800px"}}><Notepad/></Col>
            </Row>
        </Container>
    )
}

export default ArticlePage
