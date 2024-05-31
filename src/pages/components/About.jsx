// About.jsx Yik Hei Chan 301347095 30/05/2024
import * as React from 'react';
import NavBar from './NavBar.jsx';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import Resume from '../../assets/Resume.pdf';
import Photo from '../../assets/self.png';
import Link from '@mui/material/Link';

export function About() {
    const checked = React.useState(false);
    return (
        <div>
            <NavBar />
            <Zoom in={checked}>{<h1>About Me</h1>}</Zoom>
            <img src={Photo} id="self" alt="Yik Hei Chan" />
            <Box sx={{ pl: 10 }}>
            <p id="intro">Hello! My name is Yik Hei Chan, Adeline. I come from Hong Kong. I am currently a college student pursuing a diploma in Software Engineering Technician. 
                With a strong passion for web development and design, I have dedicated myself to learning and mastering the latest technologies, including JavaScript, React, and Node.js. 
                Throughout my academic journey, I have worked on various projects that showcase my ability to create responsive and dynamic websites. 
                These projects have allowed me to apply my skills in real-world scenarios, demonstrating my commitment to building innovative digital solutions. 
                In addition to my technical skills, I enjoy exploring new tech trends, participating in coding challenges, and contributing to open-source projects. 
                I invite you to explore my portfolio to see some of the work I have done and learn more about the services I offer.</p>
            </Box>
            <Link href={Resume} underline="hover" className='link'>
                {<h3 id='resume'>Here is my resume</h3>}
            </Link>
            <footer id='about'><small>Copyright &copy; Yik Hei Chan 301347095 COMP229-004 Summer2024</small></footer>
        </div>

    )
}