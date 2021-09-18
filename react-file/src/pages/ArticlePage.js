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
            <Row className="mx-auto my-4" style={{width:"95%"}}>
                <Col sm={4} style={{textAlign:"left",padding:"0"}}>
                    <ButtonMenu/>
                </Col>
            </Row>
            <Row className="my-2 mx-auto" style={{width:"95%",maxHeight:"60vh",overflowY:"hidden"}}>
                <Col className="px-0"sm={8} md={3} style={{overflowY:"auto",maxHeight:"60vh",border:"3px solid #363e5c", borderRight:"7px solid #363e5c"}}><ArticleNav/></Col>
                <Col className=""sm={8} md={9} style={{borderLeft:"none"}} >
                    <Row>
                        <Col style={{display:"flex",justifyContent:"center",flexDirection:"column",backgroundSize:"contain",backgroundPosition:"center",padding:"0px",border:"none",borderRadius:"0.1rem",height:"40vh",backgroundColor:"#363e5c"}}>
                            <Image src={activeArticle.image} style={{objectPosition:"0 0",objectFit:"cover",height:"100%",width:"100%"}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign:"left",backgroundColor:"#C8D3DE",height:"20vh",overflowY:"auto"}}>
                            {JSON.stringify(activeArticle)!=="{}" ? <ArticleDescription/> : <h3>Select an article</h3>}
                        </Col>
                    </Row>
                    
                </Col>
                
                
            </Row>
            <Row style={{width:"95%"}}>
                <Col sm={4} md={6}><CommentDisplay/></Col>
                <Col sm={8} md={6} style={{minHeight:"800px"}}><Notepad/></Col>
            </Row>
        </Container>
    )
}

export default ArticlePage
