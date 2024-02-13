import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { AccountCircle, Message, People, LibraryBooks, MusicNote, Settings } from '@mui/icons-material'

const Sidebar = ({userId}) => {
    return (
        <div>
            <Drawer variant="permanent">
                <List style={{width: 200}}>
                    <ListItem button component={Link} to={`/profile/${userId}`}>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/dialogs">
                        <ListItemIcon>
                            <Message />
                        </ListItemIcon>
                        <ListItemText primary="Messages" />
                    </ListItem>
                    <ListItem button component={Link} to="/users">
                        <ListItemIcon>
                            <People />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>
                    <ListItem button component={Link} to="/news">
                        <ListItemIcon>
                            <LibraryBooks />
                        </ListItemIcon>
                        <ListItemText primary="News" />
                    </ListItem>
                    <ListItem button component={Link} to="/music">
                        <ListItemIcon>
                            <MusicNote />
                        </ListItemIcon>
                        <ListItemText primary="Music" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/settings">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default Sidebar