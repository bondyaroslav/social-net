import React, {useEffect, useState} from "react"
import {Card, CardContent, CardMedia, Typography} from "@mui/material"
import {Link} from "react-router-dom"

const News = () => {

    const [news, setNews] = useState([])

    const getNews = () => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ea263e0ee63a4178a15e1fd651996306"
        if (news.length === 0) {
            fetch(url)
                .then( response => response.json() )
                // .then( json => console.log(json.articles) )
                .then( json => {if(json.length !== 0) {
                    setNews(json.articles)
                }})
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    console.log(news)

    return (
        <div>
            {news.map( el => (
                <Card style={{ marginBottom: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <CardContent>
                        <Typography variant="h6" component="div" style={{ marginBottom: '8px' }}>
                            {el.author}
                        </Typography>
                        <Typography variant="body2" style={{ color: '#888', marginBottom: '12px' }}>
                            {el.publishedAt}
                        </Typography>
                        <Typography variant="h5" component="div" style={{ marginBottom: '8px', color: '#007BFF' }}>
                            <Link to={el.url}>{el.title}</Link>
                        </Typography>
                        <Typography variant="body1" style={{ marginBottom: '12px', color: '#555' }}>
                            {el.description}
                        </Typography>
                        <CardMedia component="img" height="auto" image={el.urlToImage} style={{ borderRadius: '8px', marginBottom: '12px' }} />
                        <Typography variant="body1" style={{ lineHeight: '1.6' }}>
                            {el.content}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default News