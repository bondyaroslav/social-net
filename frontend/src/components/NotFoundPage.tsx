import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
        }}>
            <Typography variant="h5" gutterBottom>
                Oops! Page not found.
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
                Go to Home
            </Button>
        </div>
    )
}

export default NotFoundPage
