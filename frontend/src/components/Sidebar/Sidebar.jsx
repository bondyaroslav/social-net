import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { AccountCircle, Message, People, LibraryBooks, Settings } from '@mui/icons-material'
import {useSelector} from "react-redux";

const Sidebar = () => {
    const authUserId = useSelector( state => state.auth.id )
    return (
        <div>
            <Drawer variant="permanent">
                <List style={{width: 200}}>
                    <ListItem button component={Link} to={`/profile/${authUserId}`}>
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button component={Link} to="/messages">
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