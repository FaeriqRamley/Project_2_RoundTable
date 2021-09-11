import React from 'react'
import styles from './buttonMenu.module.css'
import {useSelector,useDispatch} from 'react-redux';
import {clearActiveArticle,clearSearchParams,clearNewsData,clearAllPublishers} from '../../actions';
import {useHistory} from 'react-router-dom';
import {ButtonGroup,Button} from 'react-bootstrap';

function ButtonMenu() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSelectDiffSource = (e) => {
        e.preventDefault();
        dispatch(clearActiveArticle());
        history.push("/")
    }

    const handleMakeNewSearch = (e) => {
        e.preventDefault();
        dispatch(clearActiveArticle());
        dispatch(clearSearchParams());
        dispatch(clearAllPublishers());
        dispatch(clearNewsData());
        history.push("/")
    }

    return (
        <ButtonGroup className={styles.menu} aria-label="Menu Buttons" style={{marginTop:"0px"}}>
            <Button  variant="outline-primary" onClick={handleMakeNewSearch}>
                <span style={{fontSize:"15px"}}>Make A New Search</span>
            </Button>
            <Button variant="outline-primary" onClick={handleSelectDiffSource}>
                <span style={{fontSize:"15px"}}>Choose other sources</span>
            </Button>
        </ButtonGroup>
    )
}

export default ButtonMenu
