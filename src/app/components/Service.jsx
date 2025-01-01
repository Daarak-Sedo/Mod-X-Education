'use client'

import React, { useEffect } from 'react';
import { Box, Typography, Grid, Container, Button } from '@mui/material';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation'

// Sample services data
const services = [
  {
    title: "Custom Strategies",
    description: "In a process as highly competitive as admissions, it’s vital that you have more than a single pair of eyes guiding you. We’ll equip you with a three-person team to boost and oversee every part of the process.",
    imageUrl: "https://publicassets.leverageedu.com/landing-pages-new/Frame3370new.png",
  },
  {
    title: "Team-Based Solution",
    description: "In a process as highly competitive as admissions, it’s vital that you have more than a single pair of eyes guiding you. We’ll equip you with a three-person team to boost and oversee every part of the process.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818315.jpg",
  },
  {
    title: "Unlimited Support",
    description: "While the journey to a top business school can be an arduous one, we believe that you can make it, if you have the right guides and the right amount of time. So, through the entire process, we’ll be there with you.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818273.jpg",
  },
];

export default function Services() {
    const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1200, // Increased duration for smoother animations
      once: false,
    });
  }, []);

  return (
    <Box component="section" sx={{ py: 4 }}>
      <Box sx={{ ml: 2, mr: 2 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{  color: 'rgb(30, 41, 89)', fontWeight: "bold",}}>
          Our Services
        </Typography>
        {services.map((service, index) => (
          <Grid
            container
            key={index}
            spacing={4}
            sx={{ my: 4 }}
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
          >
            <Grid item xs={12} md={6} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
            {/* <Grid item xs={12} md={6} data-aos={index % 2 === 0 ? "zoom-in" : "zoom-in"}> */}
              <Box sx={{ position: 'relative', height: 300 }}>
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: '8px' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="zoom-in">
            {/* <Grid item xs={12} md={6} data-aos="fade-up"> */}
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1">
                  {service.description}
                </Typography>


                <Button
                variant="contained"
                color="primary"
                sx={{
                  height: "40px",
                  width:"25%",
                  mt:2,
                  '&:hover': {
                    background: "#F9B700",
                  }
                }}
                onClick={() => router.push("/services")}
              >
                Our Services
              </Button>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
