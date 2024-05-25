import NavBar from './NavBar.jsx';
import * as React from 'react';
import Zoom from '@mui/material/Zoom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export function Contact() {
    const checked = React.useState(false);
    const insta = (<Link href="https://www.instagram.com/zzline_/" underline="hover">
        Instagram
    </Link>);
    return (
        <div>
            <NavBar />
            <Zoom in={checked}>{<h1>Contact</h1>}</Zoom>
            <Box mb={4} display="flex" justifyContent="center" alignItems="center">
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#E5F3FD' }}>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIphoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="+1 (647) 232-5265" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="adelineyikyik@gmail.com" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <InstagramIcon />
                        </ListItemIcon>
                        <ListItemText primary={insta} />
                    </ListItem>
                </List>
            </Box>
            <footer><small>Copyright &copy; Yik Hei Chan 301347095 COMP229-004 Summer2024</small></footer>
        </div>

    )
}