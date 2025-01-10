import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Avatar,
  // Timeline,
  // TimelineItem,
  // TimelineSeparator,
  // TimelineConnector,
  // TimelineContent,
  // TimelineDot,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
const AboutFounder = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "2rem", backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {/* Meet Our Founders */}
            Who We Are ?
          </Typography>

          <Typography variant="body1" lineHeight={1.8}>
            We transform students academic journeys, guiding them toward
            admission to the worlds most prestigious universities. Our
            personalised approach goes beyond test scores, empowering students
            to discover their unique strengths and build compelling applications
            that showcase their full potential.
          </Typography>
          {/* <Typography variant="body1" lineHeight={1.8}>
          Welcome to Counselor, where we believe that every student deserves a cheerleader in their corner! We’re not just a bunch of therapists with degrees; we’re your partners in navigating the wild rollercoaster of student life. Think of us as your personal GPS for mental wellness, guiding you through the twists and turns of academia and beyond!
          </Typography>
          <br/>
          <Typography variant="body1" lineHeight={1.8}>
          Our mission? To empower students to conquer their challenges with confidence and a sprinkle of humor. We know that life can throw some serious curveballs, but with our expert guidance, you’ll learn to hit them out of the park! Our vision is a world where every student feels supported, understood, and ready to take on the universe—one exam at a time!
          </Typography>

          <br/>
          <Typography variant="body1" lineHeight={1.8}>
          So, whether you’re feeling overwhelmed by finals, struggling with relationships, or just need someone to vent to, we’re here for you. Let’s turn those frowns upside down and tackle life’s challenges together. Remember, it’s okay to ask for help—after all, even superheroes have sidekicks!
          </Typography> */}
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
                  height={"250px"}
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
                  sx={{
                    height: 250, // Ensures a fixed height for the image area
                    width: "100%", // Ensures the image fills the card width
                    objectFit: "cover", // Makes the image fill the area while cropping excess parts
                  }}
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

      <Grid container spacing={4} mt={6}>
        {/* Right Side: Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "left", maxWidth: 600, margin: "auto" }}>
            {/* Title */}
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              What We Do ?
            </Typography>

            <Typography variant="body1" lineHeight={1.8}>
              We Embark on Your Journey to Study Abroad Success. we are
              dedicated to empowering students to achieve their academic and
              career dreams. Our personalized counseling services guide students
              in navigating the complexities of university admissions, career
              planning.
            </Typography>
          </Box>
        </Grid>
        {/* Left Side: Timeline */}
        <Grid item xs={12} md={6}>
          <Timeline sx={{ width: "500px" }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <SensorOccupiedIcon sx={{ height: "35px", width: "35px" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "25px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Admissions Guide
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <PublishedWithChangesIcon
                    sx={{ height: "35px", width: "35px" }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "25px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Essay Crafting
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <StarBorderPurple500Icon
                    sx={{ height: "35px", width: "35px" }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "25px", px: 2 }}>
                <Typography variant="h6" component="span">
                  ModX Buddy Program
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutFounder;
