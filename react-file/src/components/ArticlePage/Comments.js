import React from 'react'

function Comments(props) {
    console.log(props.commentList);
    return (
        <React.Fragment>
            {props.commentList.map((item,index) => {
                return(
                    <div style={{border:"2px dotted red"}}>
                        <h4>{item.userName}</h4>
                        <h5>{item.content}</h5>
                    </div>
                )
                
            })}
        </React.Fragment>
    )
}

export default Comments;
