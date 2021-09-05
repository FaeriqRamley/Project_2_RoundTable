import React from 'react'
import ParamsInput from '../components/ParamsInput';
import PublisherSelect from '../components/PublisherSelect';
import FetchHandler from '../components/FetchHandler';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

function SearchPage() {
    
    return (
        <div className="container">
            <FetchHandler/>
            <div className="row centered" style={{backgroundColor:"blue",color:"white"}}><Banner/></div>
            <div className="row">
                <div className="col-md-4" style={{border:"1px solid black"}}><ParamsInput/></div>
                <div className="col-md-8" style={{textAlign:"center",border:"1px solid black"}}><PublisherSelect/></div>
            </div>
            <div className="row centered" style={{backgroundColor:"black",color:"white"}}>
                <Footer/>
            </div>
        </div>
    )
}

export default SearchPage;
