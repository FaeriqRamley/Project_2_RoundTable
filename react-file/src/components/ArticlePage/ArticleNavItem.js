import React from 'react';
import {useDispatch} from 'react-redux';
import { updateActiveArticle } from '../../actions';

function ArticleNavItem(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateActiveArticle(props.article));
    }
    
    return (
        <p>
            <a href={props.article.url} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            {props.article.title}
            </a>
        </p>
    )
}

export default ArticleNavItem;
