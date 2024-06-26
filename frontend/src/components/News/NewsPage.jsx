import React, {useState, useEffect} from "react"
import Preloader from "../Preloader"
import {Box} from "@mui/system"
import NewsItem from "./NewsItem"
import NewsNavbar from "./NewsNavbar"
import {useDispatch, useSelector} from "react-redux"
import {getNewsByCategory} from "../../api/newsApi"
import {Pagination} from "@mui/material"

const News = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.newsPage.news)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(3)
    const [paginatedNews, setPaginatedNews] = useState([])

    useEffect(() => {
        if (!news) {
            dispatch(getNewsByCategory("business"))
        }
    }, [dispatch, news])

    useEffect(() => {
        if (news) {
            const startIndex = (currentPage - 1) * pageSize
            const endIndex = startIndex + pageSize
            setPaginatedNews(news.slice(startIndex, endIndex))
        }
    }, [news, currentPage, pageSize])

    const onChangePage = (event, page) => {
        setCurrentPage(page)
    }

    return (
        <Box style={{marginTop: 20}}>
            <NewsNavbar getNews={getNewsByCategory}/>

            {news ? (
                <>
                    {paginatedNews.map((el, index) => {
                        if (el.title !== "[Removed]") {
                            return <NewsItem key={index} el={el}/>
                        } else {
                            return null
                        }
                    })}
                    <Pagination
                        count={Math.ceil(news.length / pageSize)}
                        page={currentPage}
                        onChange={onChangePage}
                    />
                </>
            ) : (
                <Preloader/>
            )}
        </Box>
    )
}

export default News
