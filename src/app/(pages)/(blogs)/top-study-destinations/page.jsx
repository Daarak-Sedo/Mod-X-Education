'use client'

import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

export default function TopStudyDestinations() {
    const studyDestinations = [
        {
          id: 1,
          country: "United States",
          description: "The USA is the world's most popular study destination, known for its prestigious universities, cutting-edge research, and diverse culture.",
          topUniversities: ["Harvard University", "MIT", "Stanford University"],
          popularCourses: ["Computer Science", "Business", "Engineering"],
          averageTuitionFee: "$20,000 - $50,000 per year",
          livingCosts: "$10,000 - $20,000 per year",
          jobProspects: "Excellent, with Optional Practical Training (OPT) allowing students to work for up to 3 years after graduation.",
          imageUrl: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
        },
        {
          id: 2,
          country: "United Kingdom",
          description: "The UK offers world-class education with a rich history and vibrant student life in cities like London, Oxford, and Edinburgh.",
          topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London"],
          popularCourses: ["Business", "Law", "Arts and Humanities"],
          averageTuitionFee: "£10,000 - £38,000 per year",
          livingCosts: "£9,000 - £14,000 per year",
          jobProspects: "Good, with the Graduate Route allowing students to stay and work for 2 years after graduation (3 years for PhD graduates).",
          imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
        },
        {
          id: 3,
          country: "Canada",
          description: "Canada is known for its high quality of life, multicultural environment, and excellent post-study work opportunities.",
          topUniversities: ["University of Toronto", "McGill University", "University of British Columbia"],
          popularCourses: ["Engineering", "Business", "Environmental Studies"],
          averageTuitionFee: "CAD 20,000 - CAD 30,000 per year",
          livingCosts: "CAD 10,000 - CAD 15,000 per year",
          jobProspects: "Excellent, with the Post-Graduation Work Permit Program allowing students to work for up to 3 years after graduation.",
          imageUrl: "https://images.unsplash.com/photo-1569681157442-5eabf7fe850e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
        },
        {
          id: 4,
          country: "Australia",
          description: "Australia offers a relaxed lifestyle, world-class education, and unique research opportunities in fields like marine biology and environmental science.",
          topUniversities: ["University of Melbourne", "Australian National University", "University of Sydney"],
          popularCourses: ["Business", "Engineering", "Natural Sciences"],
          averageTuitionFee: "AUD 20,000 - AUD 45,000 per year",
          livingCosts: "AUD 20,000 - AUD 25,000 per year",
          jobProspects: "Good, with the Temporary Graduate visa (subclass 485) allowing students to work for 2-4 years after graduation.",
          imageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
        },
        {
          id: 5,
          country: "Germany",
          description: "Germany offers tuition-free education at public universities for all students, including internationals, making it an attractive destination for budget-conscious students.",
          topUniversities: ["Technical University of Munich", "Ludwig Maximilian University of Munich", "Heidelberg University"],
          popularCourses: ["Engineering", "Computer Science", "Business"],
          averageTuitionFee: "Free at public universities (semester fee of €150 - €350)",
          livingCosts: "€700 - €1,000 per month",
          jobProspects: "Good, with the opportunity to stay for 18 months after graduation to find a job.",
          imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
        },
        {
          id: 6,
          country: "Japan",
          description: "Japan offers a unique blend of traditional culture and cutting-edge technology, with strong programs in engineering and technology.",
          topUniversities: ["University of Tokyo", "Kyoto University", "Osaka University"],
          popularCourses: ["Engineering", "Computer Science", "Japanese Language and Culture"],
          averageTuitionFee: "¥535,800 per year at national universities",
          livingCosts: "¥100,000 - ¥150,000 per month",
          jobProspects: "Good, with opportunities to work in Japan's tech industry.",
          imageUrl: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
        },
        {
          id: 7,
          country: "Netherlands",
          description: "The Netherlands is known for its high-quality education, international environment, and English-taught programs.",
          topUniversities: ["University of Amsterdam", "Delft University of Technology", "Erasmus University Rotterdam"],
          popularCourses: ["Business", "Engineering", "Social Sciences"],
          averageTuitionFee: "€8,000 - €20,000 per year",
          livingCosts: "€800 - €1,100 per month",
          jobProspects: "Good, with the opportunity to stay for up to 3 years after graduation to find work.",
          imageUrl: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
        },
        {
          id: 8,
          country: "France",
          description: "France offers world-renowned education in arts, sciences, and culinary arts, with a rich cultural heritage.",
          topUniversities: ["Sorbonne University", "École Polytechnique", "Sciences Po"],
          popularCourses: ["Business", "Engineering", "Fashion Design"],
          averageTuitionFee: "€170 - €380 per year at public universities",
          livingCosts: "€600 - €800 per month",
          jobProspects: "Good, with opportunities to stay and work after graduation.",
          imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2946&ixlib=rb-4.0.3"
        },
        {
          id: 9,
          country: "Singapore",
          description: "Singapore is a global hub for education and business, offering high-quality programs in a multicultural environment.",
          topUniversities: ["National University of Singapore", "Nanyang Technological University", "Singapore Management University"],
          popularCourses: ["Business", "Engineering", "Computer Science"],
          averageTuitionFee: "SGD 20,000 - SGD 50,000 per year",
          livingCosts: "SGD 10,000 - SGD 15,000 per year",
          jobProspects: "Excellent, with opportunities in Singapore's thriving business and tech sectors.",
          imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=2952&ixlib=rb-4.0.3"
        },
        {
          id: 10,
          country: "New Zealand",
          description: "New Zealand offers a high-quality education system, stunning natural beauty, and a relaxed lifestyle.",
          topUniversities: ["University of Auckland", "University of Otago", "Victoria University of Wellington"],
          popularCourses: ["Environmental Sciences", "Agriculture", "Tourism and Hospitality"],
          averageTuitionFee: "NZD 22,000 - NZD 32,000 per year",
          livingCosts: "NZD 15,000 - NZD 20,000 per year",
          jobProspects: "Good, with the opportunity to work for up to 3 years after graduation.",
          imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
        }
      ];
      
      


  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 , fontWeight: 400,
              mb: 10,
            //   fontSize: isMobile ? '2.5rem' : '3.5rem',
              color: '#1a237e'}}>
        Top 10 Study Destinations
      </Typography>
      <Grid container spacing={4}>
        {studyDestinations.map((destination) => (
          <Grid item key={destination.id} xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.imageUrl}
                alt={destination.country}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  {destination.id}. {destination.country}
                </Typography>
                <Typography variant="body1" paragraph>
                  {destination.description}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Top Universities"
                      secondary={destination.topUniversities.join(', ')}
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText
                      primary="Popular Courses"
                      secondary={destination.popularCourses.join(', ')}
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText
                      primary="Average Tuition Fee"
                      secondary={destination.averageTuitionFee}
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText
                      primary="Living Costs"
                      secondary={destination.livingCosts}
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <ListItemText
                      primary="Job Prospects"
                      secondary={destination.jobProspects}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

