import React, {useEffect, useState} from 'react'
import {Card, FormControl, IconButton, InputLabel, MenuItem, Select, TextField} from "@mui/material"
import {useDispatch} from "react-redux"
import {getNewsByQuery} from "../../api/newsApi"
import SearchIcon from '@mui/icons-material/Search'

const NewsNavbar = ({getNews}) => {
    const dispatch = useDispatch()
    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
    const [category, setCategory] = useState("")

    const [query, setQuery] = useState("")

    useEffect(() => {
        dispatch(getNews(category))
    }, [category])

    return (
        <Card style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
            borderRadius: 8,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
            <FormControl sx={{m: 1, minWidth: 180}}>
                <InputLabel>News Category</InputLabel>
                <Select
                    label="News Category"
                    value={category}
                    onChange={(event) => {
                        setCategory(event.target.value)
                    }}
                >
                    {categories.map(category => (
                        <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <TextField
                    label="search news"
                    variant="outlined"
                    value={query}
                    onChange={(event) => {setQuery(event.target.value)}}
                />
                <IconButton onClick={() => {dispatch(getNewsByQuery(query))}}>
                    <SearchIcon/>
                </IconButton>
            </FormControl>
        </Card>
    )
}

export default NewsNavbar