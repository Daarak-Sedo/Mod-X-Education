'use client'

import { Box, Typography, Avatar, Rating, Container, Card } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { styled } from '@mui/material/styles'



const testimonials = [
  {
    id: 1,
    name: 'Nathaneal Down',
    role: 'Blogger',
    rating: 4,
    image: 'https://r.mobirisesite.com/1016497/assets/images/photo-1681075401974-907cc62a4373.jpeg',
    content:
      'This counseling changed my life! I finally found my path',
  },
  {
    id: 2,
    name: 'Hanson Deck',
    role: 'Blogger',
    rating: 4,
    image: 'https://r.mobirisesite.com/1016497/assets/images/photo-1662795854059-547d94855285.jpeg',
    content:
      'Best decision ever! I’m now on the right track!',
  },
  {
    id: 3,
    name: 'Nigel Nigel',
    role: 'President of Sales',
    rating: 4,
    image: 'https://r.mobirisesite.com/1016497/assets/images/photo-1608652763120-59aab1d8125c.jpeg',
    content:
      'They helped me find my voice and my confidence',
  },
  // Add more testimonials for continuous scroll effect
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Developer',
    rating: 5,
    image: 'https://r.mobirisesite.com/1016497/assets/images/photo-1546919057-eae69a7a3c35.jpeg',
    content:
      'I never thought I could achieve my dreams until I met them!',
  },
]

export default function Testimonials() {
  return (
    <Box sx={{ pl:2,pr:2 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          component="span"
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            mb: 2,
            display: 'block',
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: 'rgb(30, 41, 89)',
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            mb: 4,
          }}
        >
          Trusted by the Students
        </Typography>
      </Box>

      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} sx={{ 
             padding: 2,
            maxWidth: '350px',
            minWidth: '300px',
            margin: 2,
            display: 'flex',
            flexDirection: 'column',
            gap:2}}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 60, height: 60 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: 'rgb(30, 41, 89)', fontWeight: 600 }}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {testimonial.role}
                </Typography>
              </Box>
            </Box>
            <Rating
              value={testimonial.rating}
              readOnly
              sx={{ color: 'orange' }}
            />
            <Typography
              variant="body1"
              sx={{ color: 'text.primary', lineHeight: 1.7 }}
            >
              {testimonial.content}
            </Typography>
          </Card>
        ))}
      </Marquee>
    </Box>
  )
}

