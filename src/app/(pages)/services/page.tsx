"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkIcon from "@mui/icons-material/Work";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import { useRouter } from "next/navigation"; 


const services = [
  {
    title: "Comprehensive Education Counselling",
    description:
      "Receive end-to-end admissions support for every step of your education journey, from planning to admission, personalised to your goals and aspirations.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818315.jpg",
  },
  {
    title: "Course Shortlisting",
    description:
      "Find the perfect course that aligns with your interests, career aspirations, and academic background. We prioritise what you want to achieve.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818273.jpg",
  },
  {
    title: "University Shortlisting",
    description:
      "Discover the best universities worldwide that fit to your profile, preferences, and budget. We tailor our support based on your dream schools abroad.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818234.jpg",
  },
  {
    title: "Essay Brainstorming Sessions",
    description:
      "Collaborate with experts to generate impactful ideas and craft a compelling narrative for your essays. We help you develop a storyline for your applications using various approaches, such as AML (Action, Motivation, Learning), that suit you the best.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818147.jpg",
  },
  {
    title: "Unlimited Essay Editing Sessions",
    description:
      "Polish your essays to perfection with unlimited revision sessions with our experienced editors. After you are satisfied with the SOPs (Statement of Purpose), we go through three rounds of refinement to help your essay outshine other applicants’.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818125.jpg",
  },
  {
    title: "Dedicated Writer for SOPs",
    description:
      "Led by our co-founder herself, the writing team will assign a dedicated expert to craft a redefined Statement of Purpose that highlights your unique story and goals.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818085.jpg",
  },
  {
    title: "Interview Preparation-",
    description:
      "We provide three mock interview sessions for each shortlisted school. For London-based schools, we arrange one-on-one sessions with alumni.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818055.jpg",
  },
  {
    title: "Loan Assistance",
    description:
      "Receive expert guidance on securing education loans with optimal terms, ensuring a smooth and hassle-free way to fund your studies.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818008.jpg",
  },
  {
    title: "Visa Application Guide",
    description:
      "Effortlessly navigate the visa process with step-by-step instructions and assistance to ensure a seamless experience.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721817941.jpg",
  },
  {
    title: "Accommodation",
    description:
      "Find safe and budget-friendly accommodation options near your university with our support. You can avail partner discounts when booking accommodation through us.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721817596.jpg",
  },
  {
    title: "Post Departure Services",
    description:
      "Receive continued support after admission, including guidance on settling in, cultural orientation, and more.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721817493.jpg",
  },
 
  {
    title: "ModX Buddy Program",
    description:
      "he ModX Buddy Program is a standout initiative designed to make students feel supported, connected, and prepared for life in the UK. Moving to a new country can be overwhelming, and having a trusted peer who has already navigated the challenges can be a game-changer.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721817534.jpg",
  },

];

export default function ServicesPage() {
  const router= useRouter()
  return (
    <Box sx={{ mb:2,mt:10 }}>

        <Box textAlign="center" mb={8} >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              //   fontSize: isMobile ? '2.5rem' : '3.5rem',
              color: "#1a237e",
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#546e7a",
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
            }}
          >
            Professional counseling services to support your mental health and
            personal growth
          </Typography>
        </Box>

        <Box >
          {services.map((service, index) => (
            <Grid
              container
              key={index}
              spacing={4}
              sx={{ my: 4, background: index % 2 === 0 ? "white" : "#F2F8FD",px:4}}
              direction={index % 2 === 0 ? "row" : "row-reverse"}
            >
              <Grid
                item
                xs={12}
                md={6}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-up"}
              >
                        <Box sx={{ position: 'relative', height: 300,mb:4 ,mr:2}}>

                      
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "8px" }}
                />
                  </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                data-aos="fade-up"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" color={"#546e7a"}>{service.description}</Typography>
              </Grid>
            </Grid>
          ))}
        </Box>

         <Box textAlign="center" my={8}>
                  <Typography variant="h4" sx={{ mb: 3, color: '#1a237e' }}>
                    Want to Explore More about ModX Buddy Program ?
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#1a237e',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        bgcolor: '#0d47a1'
                      }
                    }}
                    onClick={()=>router.push("/modx-buddy-program")}
                  >
                 Click here
                  </Button>
                </Box>

    </Box>
  );
}
