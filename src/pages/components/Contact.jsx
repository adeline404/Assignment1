// Contact.jsx Yik Hei Chan 301347095 30/05/2024
import NavBar from './NavBar.jsx';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const insta = (<Link href="https://www.instagram.com/zzline_/" underline="hover" className='link'>
        Instagram
    </Link>);

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store form data in local storage
        localStorage.setItem('contactFormData', JSON.stringify(formData));
        let stored = localStorage.getItem('contactFormData');
        let fn = JSON.parse(stored);
        window.alert(`${fn.firstName}, thanks for your message.`);
        const queryParams = new URLSearchParams(formData).toString();
        // Redirect to Home Page
        navigate(`/?${queryParams}`);

    };

    return (
        <div>
            <NavBar />
            <Zoom in={checked}>{<h1>Contact Me</h1>}</Zoom>

            {/* Contact Information Panel */}
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

            {/* Interative Form */}
            <Box sx={{ mb: 4 }} justifyContent="center" alignItems="center">
                <form onSubmit={handleSubmit} action="/" method="get">
                    <table id="contact">
                        <tr>
                            <td class="label"><label>First Name</label></td>
                            <td class="txt"><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td class="label"><label>Last Name</label></td>
                            <td class="txt"><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td class="label"><label>Contact Number</label></td>
                            <td class="txt"><input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td class="label"><label>Email</label></td>
                            <td class="txt"><input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td class="label"><label>Message</label></td>
                            <td class="txt"><textarea name="message" value={formData.message} onChange={handleChange} required /></td>
                        </tr>
                    </table>
                    <br />
                    <button type="submit" id="submit">Send</button>
                </form>
            </Box>
            
            <footer><small>Copyright &copy; Yik Hei Chan 301347095 COMP229-004 Summer2024</small></footer>
        </div>

    )
}