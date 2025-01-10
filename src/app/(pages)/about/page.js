"use client";
import React, { useState } from "react";
import { Box, Container, Typography,Grid, Card, CardContent,List,ListItemText,ListItem } from "@mui/material";
import Image from "next/image";
import StatsCounter from "@/app/components/StatsCounter";
import Testimonials from "@/app/components/Testimonials";
import FAQAccordion from "@/app/components/FAQAccordion";
import AboutFounder from "@/app/components/AboutFounder";
import SupportDialog from "../../components/SupportDialog"
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ApartmentIcon from '@mui/icons-material/Apartment';

const Page = () => {
  const [open,setOpen]= useState(false)
  const handleClose = () => setOpen(false);


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
        <Box ml={8} mr={8} mt={6} mb={6} sx={{display:'flex', flexDirection:'column', gap:"80px"}}>
      <Box >
        <Typography  gutterBottom   sx={{
            color: 'rgb(30, 41, 89)',
            fontSize: { xs: '2rem', md: '2rem' },
            fontWeight: 700,
            
          }}>
          Welcome to ModX Education
        </Typography>
        <Typography variant="body1">
          Your Partner in Achieving Your Study Abroad Dream. At ModX Education, we understand that studying abroad is more than just earning a degree—it is a transformative journey toward personal growth, professional success, and new opportunities. We specialise in helping students like you achieve admission to top Masters and MBA programs in the UK while providing unparalleled support at every step of the process.
        </Typography>
      </Box>


      <Box >
        <Typography variant="h4" gutterBottom   sx={{
            color: 'rgb(30, 41, 89)',
            fontSize: { xs: '2rem', md: '2rem' },
            fontWeight: 700,
            
          }}>
          Your Path to Success – Every Step Covered
        </Typography>
        <Grid container spacing={3} mt={2}>
          {
          
          [
            {
              title: 'Free Counselling Sessions',
              description: 'Get expert guidance on academic choices, study strategies, and educational planning to achieve your academic goals.',
              icon: SchoolIcon,
              color: '#2196f3'
            },
            {
              title: 'Strategic Admission Planning',
              description: 'Navigate life challenges with professional support for stress, anxiety, depression, and personal growth.',
              icon: PsychologyIcon,
              color: '#4caf50'
            },
            {
              title: 'Course and University Selection',
              description: 'Join supportive group sessions to share experiences and learn from others facing similar challenges.',
              icon: GroupsIcon,
              color: '#ff9800'
            },
            {
              title: 'Essay Brainstorming and Editing',
              description: 'Discover your career path with personalized guidance on job search, career transitions, and professional development.',
              icon: WorkIcon,
              color: '#9c27b0'
            },
            {
              title: 'Resume Crafting & Application Submission',
              description: 'Strengthen family bonds and resolve conflicts with professional family therapy services.',
              icon: DescriptionIcon,
              color: '#e91e63'
            },
            {
              title: 'Interview Preparation',
              description: 'Improve your relationships with expert guidance on communication, trust, and emotional connection.',
              icon: BarChartIcon,
              color: '#f44336'
            },
            {
              title: 'Loan Assistance and Visa Applications',
              description: 'Improve your relationships with expert guidance on communication, trust, and emotional connection.',
              icon: AssuredWorkloadIcon,
              color: '#DAF7A6'
            },
            {
              title: 'Accommodation and Pre-departure Services',
              description: 'Improve your relationships with expert guidance on communication, trust, and emotional connection.',
              icon: ApartmentIcon,
              color: '#95a5a6'
            }
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      bgcolor: service.color,
                      color: 'white'
                    }}
                  >
                    {/* <IconComponent sx={{ fontSize: 50 }} /> */}
                    <service.icon sx={{ fontSize: 50 }} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: 600, color: '#1a237e' }}
                    >
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      {service.description}
                    </Typography>
                  
                  </CardContent>
                </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


      <Box >
        <Typography variant="h4" gutterBottom   sx={{
            color: 'rgb(30, 41, 89)',
            fontSize: { xs: '2rem', md: '2rem' },
            fontWeight: 700,
            
          }}>
          Beyond Admission – Your Lifelong Partner in Success
        </Typography>
        <Typography variant="body1" paragraph>
          At ModX Education, we are not just about getting you admitted. What sets us apart is our unwavering commitment to your success even after you have enrolled. Through our <span style={{fontWeight:700 , borderBottom:"2px solid black", cursor:"pointer"}}onClick={()=> setOpen(true)}>ModX Buddy Program</span>, we provide continuous support to help you adapt to life in the UK.
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Day-to-Day Guidance" 
              secondary="Need help opening a bank account, understanding public transport, or navigating your new environment? We are here for you."
              primaryTypographyProps={{
                sx: {
                  fontFamily: 'Arial, sans-serif', // Change font family
                  fontWeight: 'bold',              // Optional: make it bold
                  color: '#2196f3'                 // Change the text color (you can use any color code)
                }
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Career Support" 
              secondary="From landing a part-time job during your studies to securing full-time employment post-graduation, our dedicated team offers the resources and mentorship you need to build a strong professional network and achieve your career goals."
              primaryTypographyProps={{
                sx: {
                  fontFamily: 'Arial, sans-serif', // Change font family
                  fontWeight: 'bold',              // Optional: make it bold
                  color: '#2196f3'                 // Change the text color (you can use any color code)
                }
              }}
            />
          </ListItem>
        </List>
      </Box>


      <Box >
        <Typography variant="h4" gutterBottom    sx={{
            color: 'rgb(30, 41, 89)',
            fontSize: { xs: '2rem', md: '2rem' },
            fontWeight: 700,
            
          }}>
          Why Choose ModX Education?
        </Typography>
        <Typography variant="body1" paragraph>
          We know the challenges students face when pursuing education abroad—from choosing the right program to adjusting to life in a new country. Thats why we are committed to offering a holistic approach, providing support for every little detail that matters along the way. With our personalised services and genuine commitment to your success, we ensure you feel confident, prepared, and empowered throughout your journey.
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          At ModX Education, your goals are our mission. Let us help you turn your aspirations into achievements. Your dream of studying in the UK is just the beginning—lets make it a reality together.
        </Typography>
      </Box>

      </Box>


        <StatsCounter></StatsCounter>
        <Testimonials></Testimonials>
        
        <AboutFounder></AboutFounder>
        <FAQAccordion></FAQAccordion>
      </Box>

      <SupportDialog open={open} handleClose={handleClose}/>
    </>
  );
};

export default Page;
