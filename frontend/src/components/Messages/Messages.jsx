import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')

const Messages = () => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    useEffect(() => {
        socket.on('chat message', (msg) => {
            setMessages([...messages, msg])
        })
        return () => {
            socket.disconnect()
        }
    }, [messages])

    const handleSendMessage = () => {
        socket.emit('chat message', newMessage)
        setNewMessage('')
    }

    return (
        <div>
            <ul>
                {messages.map((msg) => (
                    <li key={msg.index}>{msg}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    )
}

export default Messages
