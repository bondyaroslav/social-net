import React, {useEffect, useState} from "react"
import {Card, CardContent, CardMedia, Typography} from "@mui/material"
import {Link} from "react-router-dom"
import Preloader from "../Preloader"
import {Container} from "@mui/system"
import NewsItem from "./NewsItem";

const News = () => {


    const [news, setNews] = useState([])

    const getNews = () => {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ea263e0ee63a4178a15e1fd651996306"
        if (news.length === 0) {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (json.length !== 0) {
                        setNews(json.articles)
                    }
                })
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    if (news.length !== 0) {
        return (
            <Container style={{marginTop: 30}}>
                {news.map(el => (
                    <NewsItem el={el}/>
                ))}
            </Container>
        )
    } else return <Preloader/>
}


export default News