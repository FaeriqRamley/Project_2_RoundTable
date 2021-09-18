import React from 'react'
import {Row,Col} from 'react-bootstrap'
function Footer() {
    return (
        <Row className="centered m-0 text-light bg-dark" style={{height:"100px",width:"100%"}}>
            <Col>
                <Row><Col>Project by Mohamad Faeriq Ramley</Col></Row>
                <Row><Col>Learn More about this and other projects here (link)</Col></Row>
            </Col>
        </Row>
    )
}

export default Footer;
