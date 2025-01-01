"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import StatsCounter from "@/app/components/StatsCounter";
import Testimonials from "@/app/components/Testimonials";
import FAQAccordion from "@/app/components/FAQAccordion";
import AboutFounder from "@/app/components/AboutFounder";

const page = () => {
  return (
    <>
      <Box sx={{ position: "relative", height: "500px" }}>
        <Image
          src="https://studysmart.co.in/storage/uploads/banners/1721974733.jpg"
          alt="about image"
          layout="fill"
          objectFit="cover"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,

            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Container>
            <Typography
              variant="h2"
              align="start"
              gutterBottom
              sx={{
                color: "#00584C",
                fontFamily: "Space Grotesk",
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
              }}
            >
              A Smart Move for
            </Typography>
            <Typography
              variant="h4"
              align="start"
              color="white"
              sx={{ color: "#F9B700" , fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700}}
            >
              YOUR STUDIES ABROAD
            </Typography>
          </Container>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 ,mt:6,mb:6}}>
        <StatsCounter></StatsCounter>
        <Testimonials></Testimonials>
        <FAQAccordion></FAQAccordion>
        <AboutFounder></AboutFounder>
      </Box>
    </>
  );
};

export default page;
