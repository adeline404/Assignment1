// NavBar.jsx Yik Hei Chan 301347095 30/05/2024
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";

const pages = ['Home', 'About Me', 'Projects', 'Services', 'Contact'];

function NavBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "#BDDBF4" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{
                            height: 50,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            },
                            mr: 1
                        }}
                        alt="Logo"
                        src={Logo}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
                            fontWeight: 600,
                            letterSpacing: '.001rem',
                            color: '#2267A6',
                            textDecoration: 'none',
                        }}
                    >
                        Yik Hei Chan
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none', },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link to={`/${page.toLowerCase().replace(' ', '-')}`} >
                                        <Typography textAlign="center" color='#2267A6'>

                                            {page}

                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        component="img"
                        sx={{
                            height: 40,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            mr: 1
                        }}
                        alt="Logo"
                        src={Logo}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#2267A6',
                            textDecoration: 'none',
                        }}
                    >
                        Yik Hei Chan
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={`/${page.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#2267A6', display: 'block', fontWeight: "bold" }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;