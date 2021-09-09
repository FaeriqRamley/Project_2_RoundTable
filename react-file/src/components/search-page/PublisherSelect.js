import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import PublisherWidget from './PublisherWidget';
import {Row,Col,Button} from 'react-bootstrap';
import dummyNewsData from '../../dummyNewsData';
import styles from "./PublisherSelect.module.css";

function PublisherSelect() {
    const [publishers,setPublishers] = useState({})
    const newsData = useSelector(state => state.newsData)
    const selectedPublishers = useSelector(state => state.selectedPublishers)
    const history = useHistory();

    const onClickReadArticles = () => {
        console.log("read articles");
        console.log(selectedPublishers);
        if(selectedPublishers.length===0){
            console.log("Please choose at least one article source");
        } else {
            history.push("/articles");
        }
        
    }

    useEffect(()=> {

        const publisherCount = {}
        //**Change to news data */
        for (const news of newsData){
            const name = news.source.name
            if (typeof publisherCount[name] === "undefined"){
                publisherCount[name] = 1;
            } else {
                publisherCount[name] += 1;
            }
        }

        setPublishers(publisherCount);

    },[newsData])

    const divStyle = {
        textAlign:"center",
        display:"flex",
        justifyContent:'center',
        flexDirection:"column",
        alignContent:'middle',
        minWidth: "150px",
        minHeight: "75px"

    }

    const havePublishers = (Object.entries(publishers).length !== 0)
    console.log(havePublishers);
    console.log(publishers);
    console.log(Object.entries(publishers).length)
    return (
        <React.Fragment>
            <Row>
                {Object.entries(publishers).map((item,index) => {
                    return (
                        <Col sm={{span:3}} key={index} style={divStyle}>
                            <PublisherWidget publisher={item[0]} articleCount={item[1]}/>
                        </Col>
                    )
                })}
            </Row>
            {havePublishers ? <Row className="my-0 justify-content-sm-end">
                <Col sm={4} className="p-0">
                    <Button onClick={onClickReadArticles} className={`${styles.readButton}`}>Read articles</Button>
                </Col>
            </Row>: <h5 style={{textAlign:"center"}}>No publishers available</h5>}
        </React.Fragment>
    )
}

export default PublisherSelect;
