import React from 'react'

function ShowNewsData(props) {    

    const fetchNews = async () => {
        const url = `http://api.mediastack.com/v1/news?access_key=${props.newsApiKey}&limit=3&countries=kr`
        console.log(url);

        try {
            const res = await fetch(url);
            const data = await res.json();

            props.setNewsData(data);
            console.log(props.newsData);
        } catch (err) {
            console.log(err.message)
        }
    }

    const isNotEmpty = (Object.keys(props.newsData).length > 0)
    return (
        <div>
            <h2>Relevant Properties</h2>
            <button onClick={fetchNews}>Get News</button>
            {isNotEmpty && props.newsData.data.map((item,ind) => {
                return (
                    <div key={ind}>
                        <h4>{item.title}</h4>
                        <a href={item.url}><p>{item.url}</p></a>
                    </div>
                )
            })}

            <h2>Full Data Set</h2>
            <div>{isNotEmpty && JSON.stringify(props.newsData.data[0])}</div>
            
        </div>
    )
}

export default ShowNewsData
