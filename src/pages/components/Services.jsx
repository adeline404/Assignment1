// Services.jsx Yik Hei Chan 301347095 30/05/2024
import NavBar from './NavBar.jsx';
import * as React from 'react';
import Zoom from '@mui/material/Zoom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image1 from '../../assets/service1.png';
import Image2 from '../../assets/service2.png';
import Image3 from '../../assets/service3.png';

export function Services() {
    const checked = React.useState(false);
    return (
        <div>
            <NavBar />
            <Zoom in={checked}>{<h1>Services</h1>}</Zoom>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs="auto">
                        <Card sx={{ maxWidth: 345, mb: 5 }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={Image1}
                                        alt="Plushies eCommerce"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="#225380">
                                            General Programming
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            C#, C, Java
                                        </Typography>
                                    </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs="auto" justifyContent={'center'}>
                        <Card sx={{ maxWidth: 345, mb: 5 }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={Image2}
                                        alt="ERD"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="#225380">
                                            Web Development
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            HTML, CSS, Javascript
                                        </Typography>
                                    </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs='auto'>
                        <Card sx={{ maxWidth: 345, mb: 5 }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={Image3}
                                        alt="Use Case Diagram"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" color="#225380">
                                            Database Management
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            SQL
                                        </Typography>
                                    </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            <footer><small>Copyright &copy; Yik Hei Chan 301347095 COMP229-004 Summer2024</small></footer>
        </div>

    )
}