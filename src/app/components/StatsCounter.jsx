'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';



const stats = [
  {
    value: 500,
    label: 'Happy Students'
  },
  {
    value: 100,
    suffix: '+',
    label: 'Partner Universities'
  },
  {
    value: 10,
    label: 'Countries Explored'
  }
];

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <Box >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    color: '#F4B41A', // Golden color
                    fontWeight: 'bold',
                    mb: 1,
                  }}
                >
                  {isVisible && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  )}
                </Typography>
                <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

