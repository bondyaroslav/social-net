import React, {useState} from 'react'
import { Button, Modal, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'
import {useGetIsUserAuthQuery, useSetAuthUserMutation} from "../../api/authService"
import style from './AuthModal.module.scss'

interface AuthModalProps {
    open: boolean,
    onClose: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({open, onClose}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {data} = useGetIsUserAuthQuery({})
    const [authUser] = useSetAuthUserMutation()

    console.log(data)

    const login = async () => {
        try {
            await authUser({ email, password }).unwrap()
            onClose()
        } catch (err) {
            console.error('Failed to login:', err)
        }
    }

    const onCancel = () => {
        setEmail('')
        setPassword('')
        onClose()
    }

    return (
        <Modal open={open} onClose={onClose}>
            <div className={style.AuthModal}>
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
            </div>
        </Modal>
    )
}

export default AuthModal