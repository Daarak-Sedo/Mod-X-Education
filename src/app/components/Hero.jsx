'use client'

import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container, IconButton } from '@mui/material';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    src: 'https://admissionscircle.com/wp-content/uploads/2020/12/Masters-banner-photo-scaled.jpg',
    alt: 'Study Abroad',
    title: 'Explore Global Education',
    subtitle: 'Discover opportunities to study in top universities worldwide',
  },
  {
    src: 'https://studysmart.co.in/storage/uploads/banners/1721974733.jpg',
    alt: 'Test Preparation',
    title: 'Ace Your Exams',
    subtitle: 'Comprehensive prep for IELTS, TOEFL, GRE, and more',
  },
  {
    src: 'https://studysmart.co.in/storage/uploads/banners/1721915697.jpg',
    alt: 'Career Guidance',
    title: 'Shape Your Future',
    subtitle: 'Expert advice to help you make informed career decisions',
  },
];

export default function Hero() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Box sx={{ width: '100%', height: '500px', position: 'relative', overflow: 'hidden' }}>
      <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: 'relative', height: '500px' }}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                backgroundColor: 'rgba(76, 72, 72, 0.5)',
              }}
            >
              <Container maxWidth="md">
                <Typography variant="h3" align="center" color="white" gutterBottom>
                  {image.title}
                </Typography>
                <Typography variant="h6" align="center" color="white">
                  {image.subtitle}
                </Typography>
              </Container>
            </Box>
          </Box>
        ))}
      </Slider>
      <IconButton
        onClick={() => sliderRef?.slickPrev()}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255,255,255,0.3)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={() => sliderRef?.slickNext()}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255,255,255,0.3)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

