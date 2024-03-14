import React from "react"
import Preloader from "../Preloader"
import {Container} from "@mui/system"
import NewsItem from "./NewsItem"
import NewsNavbar from "./NewsNavbar"
import {useDispatch, useSelector} from "react-redux"
import {getNewsByCategory} from "../../api/newsApi"

const News = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.newsPage.news)

    if (!news) {
        dispatch(getNewsByCategory("business"))
    }

    return (
        <Container style={{marginTop: 30}}>
            <NewsNavbar getNews={getNewsByCategory}/>

            {news
                ? news.map(el => (
                    <NewsItem key={el.index} el={el}/>
                ))
                : <Preloader/>
            }
        </Container>
    )
}


export default News