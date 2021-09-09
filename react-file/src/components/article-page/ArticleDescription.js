import React from 'react';
import {Row,Col} from 'react-bootstrap';
import {useSelector} from 'react-redux';
function ArticleDescription() {
    const activeArticle = useSelector(state => state.activeArticle)
    return (
        <React.Fragment>
            <Row><Col>
                <h6>{activeArticle.source.name}</h6>
            </Col></Row>
            <Row><Col>
                <h5>{activeArticle.title}</h5>
            </Col></Row>
            <Row><Col>
                <p style={{marginBottom:'10px'}}>Published on: {activeArticle.publishedAt.split("T")[0]}</p>
            </Col></Row>
            <Row><Col>
                <h6>{activeArticle.description.substring(0,120)}... <a>Read more</a></h6>
            </Col></Row>
        </React.Fragment>
    )
}

export default ArticleDescription;
