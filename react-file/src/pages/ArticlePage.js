import React from 'react';
import ArticleNav from '../components/article-page/ArticleNav';
import ButtonMenu from '../components/article-page/ButtonMenu';
import CommentDisplay from '../components/article-page/CommentDisplay';
import Notepad from '../components/article-page/Notepad';
import {Container,Row,Col} from 'react-bootstrap';
function ArticlePage() {
    // <div className="container">
    // <div className="row py-2" style={{textAlign:'center',border:"1px solid black",minHeight:"95vh"}}>
    //     <div className="col-md-3">
    //         <div className="container h-100 px-0">
    //             <div className="row h-75">
    //                 <div className="col"><ArticleNav/></div>
    //             </div>
    //             <div className="row h-25">
    //                 <div className="col"><ButtonMenu/></div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="col-md-6"><Notepad/></div>
    //     <div className="col-md-3"><CommentDisplay/></div>
    // </div>
    // </div>
    return (
        <Container fluid style={{textAlign:"center"}}>
            <Row>
                Button Menu to be here
            </Row>
            <Row className="mx-auto" style={{width:"85%",height:"400px"}}>
                <Col sm={4} md={3}>Article Nav</Col>
                <Col sm={4} md={{span:3,offset:1}}>Image</Col>
                <Col sm={4} md={5}>Article Description</Col>
            </Row>
            <Row style={{width:"95%"}}>
                <Col sm={4} md={6}><CommentDisplay/></Col>
                <Col sm={8} md={6}><Notepad/></Col>
            </Row>
        </Container>
    )
}

export default ArticlePage
