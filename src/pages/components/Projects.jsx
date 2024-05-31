// Projects.jsx Yik Hei Chan 301347095 30/05/2024
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

export function Projects() {
    const checked = React.useState(false);
    return (
        <div>
            <NavBar />
            <Zoom in={checked}>{<h1>Projects</h1>}</Zoom>
            {/* First Project - Website */}
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs="auto">
                    <Card sx={{ maxWidth: 345, mb: 5 }}>
                        <CardActionArea>
                            <Link href="http://studentweb.cencol.ca/ychan153/Term-Project/index.html" style={{ textDecoration: 'none' }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={Image1}
                                    alt="Plushies eCommerce"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="#225380">
                                        Website of Plushies eCommerce
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This project aimed to design a website for selling plushies. This was an individual project.
                                    </Typography>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* Second Project - Database */}
                <Grid item xs="auto" justifyContent={'center'}>
                    <Card sx={{ maxWidth: 345, mb: 5 }}>
                        <CardActionArea>
                            <Link href={Report} style={{ textDecoration: 'none' }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={Image2}
                                    alt="ERD"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="#225380">
                                        Database of Convenience Stores
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This project aimed to design a database for managing convenience stores. My role was to insert data into tables and create complex queries.
                                    </Typography>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* Third Project - Software */}
                <Grid item xs='auto'>
                    <Card sx={{ maxWidth: 345, mb: 5 }}>
                        <CardActionArea>
                            <Link href={SRS} style={{ textDecoration: 'none' }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={Image3}
                                    alt="Use Case Diagram"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="#225380">
                                        SRS Document of a note-taking and schedulling app
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This project aimed to create a software requirements specification document for a notetaking and schedulling app. My role was to draw UML diagrams like use case diagram and sequence diagram.
                                    </Typography>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <footer><small>Copyright &copy; Yik Hei Chan 301347095 COMP229-004 Summer2024</small></footer>
        </div>

    )
}