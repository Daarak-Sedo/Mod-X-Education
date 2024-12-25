import React from 'react';
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
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const services = [
  {
    title: 'Academic Counseling',
    description: 'Get expert guidance on academic choices, study strategies, and educational planning to achieve your academic goals.',
    icon: SchoolIcon,
    color: '#2196f3'
  },
  {
    title: 'Personal Counseling',
    description: 'Navigate life challenges with professional support for stress, anxiety, depression, and personal growth.',
    icon: PsychologyIcon,
    color: '#4caf50'
  },
  {
    title: 'Group Counseling',
    description: 'Join supportive group sessions to share experiences and learn from others facing similar challenges.',
    icon: GroupsIcon,
    color: '#ff9800'
  },
  {
    title: 'Career Counseling',
    description: 'Discover your career path with personalized guidance on job search, career transitions, and professional development.',
    icon: WorkIcon,
    color: '#9c27b0'
  },
  {
    title: 'Family Counseling',
    description: 'Strengthen family bonds and resolve conflicts with professional family therapy services.',
    icon: FamilyRestroomIcon,
    color: '#e91e63'
  },
  {
    title: 'Relationship Counseling',
    description: 'Improve your relationships with expert guidance on communication, trust, and emotional connection.',
    icon: FavoriteIcon,
    color: '#f44336'
  }
];

function ServicesPage() {

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 8 }}>
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
            //   fontSize: isMobile ? '2.5rem' : '3.5rem',
              color: '#1a237e'
            }}
          >
           Welcome to Our Student Counseling Resources Page
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#546e7a',
              maxWidth: '800px',
              mx: 'auto',
              mb: 4
            }}
          >
           Find helpful resources and information to support your mental health and well-being as a student. Our counseling services are here to assist you on your journey to success.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
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
                    <IconComponent sx={{ fontSize: 50 }} />
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
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: service.color,
                        '&:hover': {
                          bgcolor: service.color,
                          opacity: 0.9
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box textAlign="center" mt={8}>
          <Typography variant="h4" sx={{ mb: 3, color: '#1a237e' }}>
            Ready to Get Started?
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
          >
            Book a Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ServicesPage;