import React,{useState} from 'react';
import ArticleNav from '../components/article-page/ArticleNav';
import ButtonMenu from '../components/article-page/ButtonMenu';
import ArticleDescription from '../components/article-page/ArticleDescription';
import CommentDisplay from '../components/article-page/CommentDisplay';
import Notepad from '../components/article-page/Notepad';
import {Container,Row,Col,Image,Button,Modal} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import './ArticlePage.css';


function ArticlePage() {
    const activeArticle = useSelector(state => state.activeArticle)
    const [showModal,setShowModal] = useState(false);
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
                            {JSON.stringify(activeArticle)!=="{}" ? <Image src={activeArticle.image} style={{objectPosition:"0 0",objectFit:"cover",height:"100%",width:"100%"}}/> : <h1 style={{color:"#e6e7e8",width:"80%",margin:"auto"}}>Select An Article On The Left Start Reading </h1>}
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign:"left",backgroundColor:"#C8D3DE",height:"20vh",overflowY:"auto"}}>
                            {JSON.stringify(activeArticle)!=="{}" ? <ArticleDescription/> : <div><br/><h6>ArticleDescription</h6></div>}
                        </Col>
                    </Row>
                    
                </Col>
                
                
            </Row>
            
            <Row className="mx-auto" style={{width:"95%"}}>
                <Col sm={4} md={{span:9,offset:3}}><CommentDisplay/></Col>
            </Row>

            <Row>
                <Button onClick={()=> setShowModal(true)}>Take some Notes</Button>
            </Row>
            
            <Modal
                show={showModal}
                size="lg"
                aria-labelledby="notepad-modal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Take Notes
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Notepad/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=> setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default ArticlePage
