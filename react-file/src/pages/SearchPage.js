import React from 'react'
import ParamsInput from '../components/search-page/ParamsInput';
import PublisherSelect from '../components/search-page/PublisherSelect';
import FetchHandler from '../components/search-page/FetchHandler';
import Footer from '../components/search-page/Footer';
import Banner from '../components/search-page/Banner';
import styles from './searchPage.module.css';

const quote = {quote:"The greatest tragedy for any human being is going through their entire lives believing the only perspective that matters is their own.", author:"Doug Baldwin"}

function SearchPage() {
    
    return (
        <div className={`container-fluid ${styles.mainContainer}`}>
            <FetchHandler/>
            <div className="row">
                <div className="col centered">
                    <img src="./RoundTable_logo_nobg.png" width="200px" alt="RoundTable Logo"/>
                </div>
            </div>
            <div className={`row ${styles.searchBar}`}>
                <div className="col-md-4" style={{border:"1px solid black"}}><ParamsInput/></div>
                <div className="col-md-8" style={{textAlign:"center",border:"1px solid black"}}><PublisherSelect/></div>
            </div>
        </div>
    )
}

export default SearchPage;
