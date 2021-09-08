import React from 'react'
import {useSelector} from 'react-redux';
function Comments(props) {
    const commentList = useSelector(state => state.commentList)
    return (
        <React.Fragment>
            {commentList.map((item,index) => {
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
