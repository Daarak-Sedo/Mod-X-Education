"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Container, IconButton, Button } from "@mui/material";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactModal from "./ContactModal";

const images = [
  {
    src: "https://studysmart.co.in/storage/uploads/banners/1721974733.jpg",
    alt: "Study Abroad",
    title: "Explore Global Education",
    subtitle: "Discover opportunities to study in top universities worldwide",
  },

  {
    src: "https://studysmart.co.in/storage/uploads/banners/1721915697.jpg",
    alt: "Career Guidance",
    title: "Shape Your Future",
    subtitle: "Expert advice to help you make informed career decisions",
  },
  {
    src: "https://studysmart.co.in/storage/uploads/banners/1721810809.jpg",
    alt: "Test Preparation",
    title: "Ace Your Exams",
    subtitle: "Comprehensive prep for IELTS, TOEFL, GRE, and more",
  },
];

export default function Hero() {
  const [sliderRef, setSliderRef] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
    <>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
          {images.map((image, index) => (
            <Box key={index} sx={{ position: "relative", height: "500px" }}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  backgroundColor: "rgba(76, 72, 72, 0.5)",
                }}
              >
                <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  ml:5,
    p: 2,
  }}
>
  <Typography
    variant="h3"
    align="center"
    color="white"
    gutterBottom
    sx={{
      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
    }}
  >
    {image.title}
  </Typography>
  <Typography
    variant="h5"
    align="center"
    color="white"
    sx={{
      fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
    }}
  >
    {image.subtitle}
  </Typography>
  <Typography
    variant="h4"
    align="center"
    sx={{
      mb: 3,
      mt: 3,
      color: "secondary",
      fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
    }}
  >
    Ready to Get Started?
  </Typography>

  <Button
    variant="contained"
    size="large"
    sx={{
      fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
      display: "flex", // Ensure proper layout
      justifyContent: "center", // Center-align the button's content
      "&:hover": {
        bgcolor: "#0d47a1",
        backgroundColor: "#F9B700",
      },
    }}
    onClick={() => setIsContactModalOpen(true)}
  >
    Book a Consultation
  </Button>
</Box>

              </Box>
            </Box>
          ))}
        </Slider>
        <IconButton
          onClick={() => sliderRef?.slickPrev()}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.3)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.5)" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={() => sliderRef?.slickNext()}
          sx={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.3)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.5)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <ContactModal open={isContactModalOpen} setOpen={setIsContactModalOpen} />
    </>
  );
}
