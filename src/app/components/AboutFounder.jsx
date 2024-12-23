import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const AboutFounder = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: '2rem', backgroundColor: '#fff' }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {/* Meet Our Founders */}
            Who We Are ?
          </Typography>
          <Typography variant="body1" lineHeight={1.8}>
          Welcome to Counselor, where we believe that every student deserves a cheerleader in their corner! We’re not just a bunch of therapists with degrees; we’re your partners in navigating the wild rollercoaster of student life. Think of us as your personal GPS for mental wellness, guiding you through the twists and turns of academia and beyond!
          </Typography>
          <br/>
          <Typography variant="body1" lineHeight={1.8}>
          Our mission? To empower students to conquer their challenges with confidence and a sprinkle of humor. We know that life can throw some serious curveballs, but with our expert guidance, you’ll learn to hit them out of the park! Our vision is a world where every student feels supported, understood, and ready to take on the universe—one exam at a time!
          </Typography>

          <br/>
          <Typography variant="body1" lineHeight={1.8}>
          So, whether you’re feeling overwhelmed by finals, struggling with relationships, or just need someone to vent to, we’re here for you. Let’s turn those frowns upside down and tackle life’s challenges together. Remember, it’s okay to ask for help—after all, even superheroes have sidekicks!
          </Typography>
        </Grid>

        {/* Right Side: Founders Images */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Founder 1 */}
            <Grid item xs={12} sm={6}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="https://leapscholar.com/_next/image?url=https%3A%2F%2Fd14lg9nzq1d3lc.cloudfront.net%2Fscholarfrontend%2Fassets%2Fimages%2FLSRevamp%2Fabout-us-page%2Ffounder-1.png&w=640&q=75" // Replace with actual image
                  alt="Vaibhav Singh"
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                  Abdullah Kidwai
                  </Typography>
                  <Typography variant="body2">CFA</Typography>
                  <Typography variant="body2">
                    IIT Kharagpur, Columbia University New York
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Founder 2 */}
            <Grid item xs={12} sm={6}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="https://leapscholar.com/_next/image?url=https%3A%2F%2Fd14lg9nzq1d3lc.cloudfront.net%2Fscholarfrontend%2Fassets%2Fimages%2FLSRevamp%2Fabout-us-page%2Ffounder-2.png&w=640&q=75" // Replace with actual image
                  alt="Arnav Kumar"
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                  Suhil Khan
                  </Typography>
                  <Typography variant="body2">IIT Kharagpur</Typography>
                  <Typography variant="body2">
                    Ex-Venture Capital investor at SAIF Partners
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutFounder;
