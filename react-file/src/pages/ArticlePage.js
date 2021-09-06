import React from 'react';
import ArticleNav from '../components/ArticlePage/ArticleNav';

function ArticlePage() {
    return (
        <div className="container">
            <div className="row py-2" style={{textAlign:'center',border:"1px solid black",height:"95vh"}}>
                <div className="col-md-3">
                    <div className="container h-100 px-0">
                        <div className="row h-75">
                            <div className="col"><ArticleNav/></div>
                        </div>
                        <div className="row h-25">
                            <div className="col">buttons</div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-6">Notepad</div>
                <div className="col-md-3">Comments</div>
            </div>
            
        </div>
    )
}

export default ArticlePage
