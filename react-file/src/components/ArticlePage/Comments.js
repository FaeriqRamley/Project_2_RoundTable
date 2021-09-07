import React from 'react'

function Comments(props) {
    return (
        <React.Fragment>
            {props.commentList.map((item,index) => {
                return(
                    <div className="row" key={index} style={{border:"2px dotted red",textAlign:"left"}}>
                        <div><strong>{item.userName}</strong></div>
                        <div>{item.content}</div>
                    </div>
                )
                
            })}
        </React.Fragment>
    )
}

export default Comments;
