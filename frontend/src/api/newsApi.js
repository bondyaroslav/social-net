import axios from "axios"
import {setNews} from "../store/reducers/newsReducer"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://newsapi.org/v2/",
})

const key = "ea263e0ee63a4178a15e1fd651996306"
const url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=ea263e0ee63a4178a15e1fd651996306`

export const getNewsByCategory = (category) => {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=${key}`)
            .then(response => {
                dispatch(setNews(response.data.articles))
            })
    }
}

export const getNewsByQuery = (query) => {
    return (dispatch) => {
        axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${key}`)
            .then(response => {
                dispatch(setNews(response.data.articles))
            })
    }
}

