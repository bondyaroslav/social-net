import React from 'react'
import {Card, CardContent, CardMedia, Typography} from "@mui/material"
import {Link} from "react-router-dom"

const NewsItem = ({el}) => {
    return (
        <Card style={{
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
            <CardContent>
                <Typography variant="h6" component="div" style={{marginBottom: '8px'}}>
                    {el.author}
                </Typography>
                <Typography variant="body2" style={{color: '#888', marginBottom: '12px'}}>
                    {el.publishedAt}
                </Typography>
                <Typography variant="h5" component="div"
                            style={{marginBottom: '8px', color: '#007BFF'}}>
                    <Link to={el.url}>{el.title}</Link>
                </Typography>
                <Typography variant="body1" style={{marginBottom: '12px', color: '#555'}}>
                    {el.description}
                </Typography>
                <CardMedia component="img" height="auto" image={el.urlToImage}
                           style={{borderRadius: '8px', marginBottom: '12px'}}/>
                <Typography variant="body1" style={{lineHeight: '1.6'}}>
                    {el.content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NewsItem