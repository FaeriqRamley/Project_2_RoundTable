import React from 'react'
import {useSelector} from 'react-redux';
import {Row,Col} from 'react-bootstrap';

function Comments() {
    const commentList = useSelector(state => state.commentList)

    // <React.Fragment>
    //     {commentList.map((item,index) => {
    //         let bgCol = "gray";
    //         if(item.bias.toLowerCase() === "for"){
    //             bgCol = "#5A9367";
    //         } else if (item.bias.toLowerCase() === "against"){
    //             bgCol = "#931621"
    //         }
    //         return(
    //             <div className="row" key={index} style={{color:"#D9DCD6",textAlign:'left',backgroundColor:bgCol,width:"80%",margin:"5px 0px auto"}}>
    //                 <div><strong>{item.userName}</strong></div>
    //                 <div>{item.content}</div>
    //             </div>
    //         )
    //     })}
    // </React.Fragment>
    return (
        <React.Fragment>
            {commentList.map((item,index) => {
                let bgCol = "gray";
                if(item.bias.toLowerCase() === "for"){
                    bgCol = "#5A9367";
                } else if (item.bias.toLowerCase() === "against"){
                    bgCol = "#931621"
                }
                return(
                    <Row className="my-2">
                        <Col style={{textAlign:"center",maxWidth:"60px",margin:"auto"}}>
                            <div style={{border:"1px solid black",borderRadius:"0.1rem",width:"50px",height:"50px",backgroundColor:"whitesmoke"}}></div>
                        </Col>
                        <Col style={{textAlign:"left",borderLeft:`7px solid ${bgCol}`,marginLeft:"15px",paddingLeft:"5px"}}>
                            <div><strong>{item.userName}</strong></div>
                            <div>{item.content}</div>
                        </Col>
                    </Row>
                )
            })}
        </React.Fragment>
    )
}

export default Comments;
