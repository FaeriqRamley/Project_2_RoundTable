import React from 'react'

function ArticleNavItem(props) {
    const publisherNoSpace = props.publisher.replace(" ","")
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${publisherNoSpace}`}>
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${publisherNoSpace}`}
                    aria-expanded="true"
                    aria-controls={`${publisherNoSpace}`}
                >
                    {props.publisher}
                </button>
            </h2>

            <div
                id={`${publisherNoSpace}`}
                className="accordion-collapse collapse hide"
                aria-labelledby={`heading${publisherNoSpace}`}
                data-bs-parent="#articleNav">
                <div class="accordion-body">
                    {props.newsArr.map((article,index)=>{
                            <p key={index}>
                                {article.title}
                            </p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArticleNavItem;
