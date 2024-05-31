// Home.jsx Yik Hei Chan 301347095 30/05/2024
import * as React from 'react';
import NavBar from './NavBar.jsx';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';

export function Home() {
    const checked = React.useState(false);
    return (
        <div>
            <NavBar />
            <Zoom in={checked}>{<h1>Welcome to my portfolio!</h1>}</Zoom>
            <Box my={4} display="flex" justifyContent="center" alignItems="center">
                <Alert severity="info" style={{ width: '68%', backgroundColor: '#F4FAFF', position: 'relative', fontSize: '1em' }}>
                    <AlertTitle style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.5rem' }}>Mission Statement</AlertTitle>
                    To build reliable, scalable software solutions that solve complex problems and improve the quality of life for users.
                </Alert>
            </Box>
            <Link href="/about-me" underline="hover" index='link'>
                {<h3>Click here to learn more about me</h3>}
            </Link>
            <footer><small>Copyright &copy; Yik Hei Chan 301347095 COMP229-004 Summer2024</small></footer>
        </div>

    )
}