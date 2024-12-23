"use client";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Services from "./components/Service";
import LatestUpdates from "./components/LatestUpdates";
import StatsCounter from "./components/StatsCounter";
import FounderSection from "./components/FounderSection";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Hero />

      <Box sx={{mt:4}}>
      <StatsCounter></StatsCounter>
      </Box>
     
      <Box component="main" sx={{ ml: 2, mr: 2, flexGrow: 1 }}>
        <LatestUpdates />
      </Box>

      <Box mt={2}>
        <Services></Services>
      </Box>
      <FounderSection></FounderSection>
    </Box>
  );
}
