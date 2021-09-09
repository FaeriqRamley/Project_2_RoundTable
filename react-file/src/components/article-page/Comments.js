import React from 'react'
import {useSelector} from 'react-redux';

function Comments() {
    const commentList = useSelector(state => state.commentList)

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
                    <div className="row" key={index} style={{color:"#D9DCD6",textAlign:'left',backgroundColor:bgCol,width:"80%",margin:"5px 0px auto"}}>
                        <div><strong>{item.userName}</strong></div>
                        <div>{item.content}</div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default Comments;
