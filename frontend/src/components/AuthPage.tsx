import React, {useState} from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'
import {useDispatch, useSelector} from "react-redux"
import axios from "axios"
import {authMe} from "../api/authApi"

const AuthModal = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(!useSelector(state => state.auth.isAuth))
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        axios.post("https://social-network.samuraijs.com/api/1.0/auth/login", {email, password})
            .then(response => console.log(response))
            .catch(error => console.error(error))
        setTimeout(authMe, 1500)
    }

    const onCancel = () => {
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <Dialog open={open}>
                <DialogTitle>Authorization</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={login}>
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AuthModal