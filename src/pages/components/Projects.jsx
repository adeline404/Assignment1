import NavBar from './NavBar.jsx';
import * as React from 'react';
import Zoom from '@mui/material/Zoom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image1 from '../../assets/project1.png';
import Image2 from '../../assets/project2.png';
import Report from '../../assets/project2_report.pdf';
import Image3 from '../../assets/project3.png';
import SRS from '../../assets/project3_srs.pdf';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export function Projects() {
    const checked = React.useState(false);
    return (
        <div>
            <NavBar />
            <Zoom in={checked}>{<h1>Projects</h1>}</Zoom>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs="auto">
                        <Card sx={{ maxWidth: 345, mb: 5 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={Image1}
                                    alt="Plushies eCommerce"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Website of Plushies eCommerce
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This project aimed to design a website for selling plushies.
                                        <Link href="http://studentweb.cencol.ca/ychan153/Term-Project/index.html" underline="hover">
                                            <p>The actual link</p>
                                        </Link>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs="auto" justifyContent={'center'}>
                    <Card sx={{ maxWidth: 345, mb: 5 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={Image2}
                                    alt="ERD"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Database of Convenience Stores
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This project aimed to design a database for managing convenience stores.
                                        <Link href={Report} underline="hover">
                                            <p>The whole report</p>
                                        </Link>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs>
                    <Card sx={{ maxWidth: 345, mb: 5 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={Image3}
                                    alt="Use Case Diagram"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        SRS Document of a note-taking and schedulling app
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This project aimed to create a software requirements specification document for a notetaking and schedulling app.
                                        <Link href={SRS} underline="hover">
                                            <p>The whole SRS document</p>
                                        </Link>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <footer><small>Copyright &copy; Yik Hei Chan 301347095 COMP229-004 Summer2024</small></footer>
        </div>

    )
}