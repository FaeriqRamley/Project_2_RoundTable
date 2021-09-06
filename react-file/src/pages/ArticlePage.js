import React from 'react';
import ArticleNav from '../components/ArticlePage/ArticleNav';
import ButtonMenu from '../components/ArticlePage/ButtonMenu';
import CommentDisplay from '../components/ArticlePage/CommentDisplay';
import Notepad from '../components/ArticlePage/Notepad';

function ArticlePage() {
    return (
        <div className="container">
            <div className="row py-2" style={{textAlign:'center',border:"1px solid black",minHeight:"95vh"}}>
                <div className="col-md-3">
                    <div className="container h-100 px-0">
                        <div className="row h-75">
                            <div className="col"><ArticleNav/></div>
                        </div>
                        <div className="row h-25">
                            <div className="col"><ButtonMenu/></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6"><Notepad/></div>
                <div className="col-md-3"><CommentDisplay/></div>
            </div>
            
        </div>
    )
}

export default ArticlePage
