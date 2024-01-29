import React, {useState} from "react"

const News = () => {

    const [news, setNews] = useState([])

    const getNews = () => {
        const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-12-29&sortBy=publishedAt&apiKey=ea263e0ee63a4178a15e1fd651996306"
        if (news.length === 0) {
            fetch(url)
                .then( response => response.json() )
                // .then( json => console.log(json.articles) )
                .then( json => setNews(json.articles) )
        }
    }

    getNews()
    console.log(news)

    return (
        <div>
            {news.map( el => (
                <div key={el.source.name} style={{border: 1}}>
                    <p>{el.author}</p>
                    <div>{el.title}</div>
                    <div>{el.description}</div>
                    <a href={el.url}>link to source</a>
                    <img src={el.urlToImage} alt="loading"/>
                    <p>{el.publishedAt}</p>
                    <div>{el.content}</div>
                </div>
            ) )}
        </div>
    )
}

export default News