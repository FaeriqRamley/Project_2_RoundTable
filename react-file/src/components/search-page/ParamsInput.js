import React,{useRef} from 'react'
import styles from "../../pages/searchPage.module.css"
import {useDispatch} from 'react-redux';
import {addSearchParams} from '../../actions';
import {Button,Form,FloatingLabel,Row,Col,Container} from 'react-bootstrap';

function ParamsInput() {
    const keywordRef = useRef("")
    const sourceRef = useRef("")
    const languageRef = useRef("")
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        console.log("submitting")
        e.preventDefault();
        const newEntry = {};
        newEntry[keywordRef.current.id] = keywordRef.current.value;
        newEntry[sourceRef.current.id] = sourceRef.current.value;
        newEntry[languageRef.current.id] = languageRef.current.value;
        dispatch(addSearchParams(newEntry))
    }
        // <form onSubmit={handleSubmit}>
        //     <label>Keywords</label>
        //     <input id="keywords" styles={{inputStyles}} type="text" ref={keywordRef}></input>
        //     <label>Source</label>
        //     <input id="source" styles={{inputStyles}} type="text" ref={sourceRef}></input>
        //     <label>Language</label>
        //     <input id="language" styles={{inputStyles}} type="text" ref={languageRef}></input>
        //     <Button variant="test" type="submit">Search</Button>
        // </form>
    return (
        <Container fluid style={{width:"100%",height:"98%"}}>
            <Form onSubmit={handleSubmit}>
                <Row className="my-1">
                    <Col>
                        <FloatingLabel controlId="floatingKeywords" label="Keywords">
                            <Form.Control id="keywords" type="text" placeholder="Keywords" className={styles.inputField} ref={keywordRef} autoComplete="off"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="my-1">
                    <Col>
                        <FloatingLabel controlId="floatingSource" label="Country">
                        <Form.Control id="country" type="text" placeholder="Country" className={styles.inputField} ref={sourceRef} autoComplete="off"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="my-1">
                    <Col>
                        <FloatingLabel controlId="floatingSource" label="Language">
                        <Form.Control id="lang" type="text" placeholder="Enter Language" className={styles.inputField} ref={languageRef} autoComplete="off"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mt-3 justify-content-sm-end">
                    <Col sm={4}>
                        <Button type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default ParamsInput;
