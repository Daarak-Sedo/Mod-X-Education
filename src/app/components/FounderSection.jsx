'use client'

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';


const teamMembers= [
  {
    name: "Abdullah Kidwai",
    role: "Co-Founder",
    image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fd14lg9nzq1d3lc.cloudfront.net%2Fscholarfrontend%2Fassets%2Fimages%2FLSRevamp%2Fabout-us-page%2Ffounder-1.png&w=640&q=75",
    bio: "Visionary leader with 15+ years of experience in international education. Passionate about creating opportunities for students worldwide."
  },
  {
    name: "Suhil Khan",
    role: "Visionary",
    image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fd14lg9nzq1d3lc.cloudfront.net%2Fscholarfrontend%2Fassets%2Fimages%2FLSRevamp%2Fabout-us-page%2Ffounder-2.png&w=640&q=75",
    bio: "Creative strategist dedicated to revolutionizing the study abroad experience. Former international student turned education innovator."
  },
  {
    name: "Rahil Singh",
    role: "Innovator",
    image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fd14lg9nzq1d3lc.cloudfront.net%2Fscholarfrontend%2Fassets%2Fimages%2FLSRevamp%2Fabout-us-page%2Ffounder-1.png&w=640&q=75",
    bio: "Tech enthusiast and education reformer. Committed to making quality education accessible to students across the globe."
  }
];

export default function FounderSection() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardFlip = (index) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: '#b89073', // Brown background color matching the image
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 2, fontWeight: 'bold',color:"black" }}
        >
         Meet Our Founder
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 6 }}
        >
         Get personalised counselling from our founder and principal consultant, Mr. Sahil Narang. Having personally counselled over 1000+ students for top universities and business schools across the globe, Sahil is equipped with a wealth of experience when it comes to education abroad.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: 400,
       borderRadius:"20px",
                  perspective: '1000px',
                  '& > div': {
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d',
                  },
                  '& > div > div': {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                  },
                }}
                onMouseEnter={() => handleCardFlip(index)}
                onMouseLeave={() => handleCardFlip(index)}
              >
                <Box
                  sx={{
                    transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0)',
                    height: '100%',
                  }}
                >
                  {/* Front of card */}
                  <CardContent
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={member.name}
                      sx={{
                        width: 150,
                        height: 150,
                        borderRadius: '50%',
                        mb: 2,
                      }}
                    />
                    <Typography variant="h5" component="h3">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary">
                      {member.role}
                    </Typography>
                    <Button variant="contained" color="primary">
                      Learn More
                    </Button>
                  </CardContent>

                  {/* Back of card */}
                  <CardContent
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <Typography variant="body1" align="center">
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

