'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      //  bgcolor: '#505050',
       bgcolor: ' #F2F8FD',
      
       py:4}}>


      {/* Links Section */}
      <Box sx={{mr:2,ml:2}}>
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Link href="#" color="text.primary" display="block">Team</Link>
            <Link href="#" color="text.primary" display="block">History</Link>
            <Link href="#" color="text.primary" display="block">Contact Us</Link>
            <Link href="#" color="text.primary" display="block">Locations</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Services
            </Typography>
            <Link href="#" color="text.primary" display="block">Study Abroad</Link>
            <Link href="#" color="text.primary" display="block">Test Preparation</Link>
            <Link href="#" color="text.primary" display="block">Counseling</Link>
            <Link href="#" color="text.primary" display="block">Visa Services</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Link href="#" color="text.primary" display="block">Privacy Policy</Link>
            <Link href="#" color="text.primary" display="block">Terms of Use</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
                  {/* Top Logo Section */}
      
        <Box display="flex" justifyContent="center" mb={2}>
          <img
          src="https://leapscholar.com/blog/wp-content/uploads/2022/11/LeapScholar-header-logo.svg"
            alt="Company Logo"
            style={{ height: 60 }}
          />
        </Box>
        <Divider />
    
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        {/* Copyright Section */}
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;