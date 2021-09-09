import React,{useState,useEffect} from 'react';
import styles from './publisherWidget.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {addPublisher,removePublisher} from '../../actions';

function PublisherWidget(props) {
    const selectedPublishers = useSelector(state => state.selectedPublishers)
    const [selected,toggleSelected] = useState("");

    const dispatch = useDispatch();

    //To highlight already selected articles
    useEffect(() => {
        if(selectedPublishers.indexOf(props.publisher) !== -1){
            toggleSelected(styles.selected);
        }
    }, [props.publisher,styles.selected])


    const handleClick = () => {

        //Add or remove from selectedPublishers list
        const pubIndex = selectedPublishers.indexOf(props.publisher);
        if (pubIndex === -1){
            dispatch(addPublisher(props.publisher))
        } else {
            dispatch(removePublisher(props.publisher))
        }

        if (selected === styles.selected){
            toggleSelected("")
        } else {
            toggleSelected(styles.selected)
        }
    }
    return (
        <div className={`${styles.widgetDiv} ${selected}`} onClick={handleClick}>
            <div className={styles.publisherDiv}>{props.publisher}</div>
            <div className={styles.articleDiv}>{props.articleCount} article(s)</div>
        </div>
    )
}

export default PublisherWidget
