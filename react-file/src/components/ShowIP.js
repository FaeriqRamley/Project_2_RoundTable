import React from 'react'

function ShowIP(props) {

    const fetchIP = async () => {
        const res = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${props.geoApiKey}`)
        const data = await res.json()
        
        props.setUserIP(data)
        console.log(data)
    }

    const userIP = props.userIP;
    return (
        <div>
            <button onClick={fetchIP}>Get IP</button>
            <h2>Full Data Set</h2>
            <h5>{JSON.stringify(userIP)}</h5>

            <h2>Relevant properties</h2>
            <h4>Show user IP: {userIP.ip_address}</h4>
            <h4>Show user Country: {userIP.country}</h4>
            <h4>Show user Flag {userIP.flag.png}</h4>
            <img src={userIP.flag.png} width="200px" alt=""/>
            <br/>
        </div>
    )
}

export default ShowIP
