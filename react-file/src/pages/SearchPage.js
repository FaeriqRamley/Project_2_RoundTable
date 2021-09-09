import React from 'react'
import ParamsInput from '../components/search-page/ParamsInput';
import PublisherSelect from '../components/search-page/PublisherSelect';
import FetchHandler from '../components/search-page/FetchHandler';
import Footer from '../components/search-page/Footer';
import Banner from '../components/search-page/Banner';
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
            {/* <Row className={`${styles.searchBar}`}> */}
            <Row className={`${styles.searchBar}`}>
                <Col md={{span:3,offset:2}}>
                    <Row><Col>
                        <h5>1. Input Search Parameters</h5>
                    </Col></Row>
                    <Row><Col style={{backgroundColor:"#2E294E",color:"#D9DCD6"}}>
                        <ParamsInput/>
                    </Col></Row>
                </Col>
                <Col md={5}>
                    <Row><Col>
                        <h5>2. Select Articles from Publishers</h5>
                    </Col></Row>
                    <Row><Col style={{backgroundColor:"#2E294E",color:"#D9DCD6"}}>
                        <PublisherSelect/>
                    </Col></Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchPage;
