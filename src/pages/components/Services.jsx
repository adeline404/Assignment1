// Services.jsx Yik Hei Chan 301347095 30/05/2024
import NavBar from './NavBar.jsx';
import * as React from 'react';
import Zoom from '@mui/material/Zoom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ComputerIcon from '@mui/icons-material/Computer';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import Box from '@mui/material/Box';

export function Services() {
    const checked = React.useState(false);
    return (
        <div>
            <NavBar />
            <Zoom in={checked}>{<h1>Services</h1>}</Zoom>
            <Box mb={4} display="flex" justifyContent="center" alignItems="center">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#E5F3FD' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ComputerIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="General Programming" secondary="C#, C, Java" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WebIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Web Development" secondary="HTML, CSS, Javascript" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <StorageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Database Management" secondary="SQL" />
                    </ListItem>
                </List>
            </Box>
            <footer><small>Copyright &copy; Yik Hei Chan 301347095 COMP229-004 Summer2024</small></footer>
        </div>

    )
}