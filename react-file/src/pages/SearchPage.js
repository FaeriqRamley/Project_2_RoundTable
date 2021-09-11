import React from 'react'
import ParamsInput from '../components/search-page/ParamsInput';
import PublisherSelect from '../components/search-page/PublisherSelect';
import FetchHandler from '../components/search-page/FetchHandler';
import styles from './searchPage.module.css';
import {Container,Row,Col} from 'react-bootstrap';

const quote = {quote:"The greatest tragedy for any human being is going through their entire lives believing the only perspective that matters is their own.", author:"Doug Baldwin"}

function SearchPage() {
    return (
        <Container fluid className={`${styles.mainContainer}`}>
            <FetchHandler/>
            <Row>
                <Col className="centered">
                    <img src="./RoundTable_logo_nobg.png" width="200px" alt="RoundTable Logo"/>
                </Col>
            </Row>
            <Row className={`${styles.searchBar}`}>
                <Col md={{span:3,offset:2}}>
                    <Row style={{height:"10%"}}><Col>
                        <h5>
                            <span style={{backgroundColor:"black"}}>1. Input Search Parameters</span>
                        </h5>
                    </Col></Row>
                    <Row style={{height:"90%"}}><Col style={{backgroundColor:"rgba(46, 41, 78,0.85)",color:"#D9DCD6",border:"2px solid black",padding:"0px"}}>
                        <ParamsInput/>
                    </Col></Row>
                </Col>
                <Col md={5}>
                    <Row style={{height:"10%"}}><Col>
                        <h5>
                            <span style={{backgroundColor:"black"}}>2. Select Articles from Publishers</span>
                        </h5>
                    </Col></Row>
                    <Row style={{height:"90%"}}><Col style={{backgroundColor:"rgba(46, 41, 78,0.85)",color:"#D9DCD6",border:"2px solid black",borderLeft:"0px",position:"relative"}}>
                        <PublisherSelect/>
                    </Col></Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchPage;
