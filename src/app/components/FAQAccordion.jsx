'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// FAQ data
const faqs = [
  {
    question: "What is ModX Education?",
    answer: "ModX Education is a one-stop platform for students who wish to pursue their studies abroad. We, at LS, assist students from the beginning of the application process to the time they set foot in the new country. We help students by taking care of profile evaluation, shortlisting of colleges, application submission to getting a students’ visa. We also offer guidance to ensure that every student who signs up with us successfully books a seat in their dream university. We follow a unique approach to counselling following which our team of experienced study-abroad consultants work with student mentors to help you make the right decision for your career."
  },
  {
    question: "Is ModX Education Free??",
    answer: "ModX Education offers a bunch of services free-of-cost that includes preliminary consultations with a Leap counsellor, IELTS Masterclass as well as access to our events. However, we charge a nominal fee for our array of paid products that help you to fasttrack your journey towards your dream university."
  },
  {
    question: "I have some more questions regarding Councellings. How can I get them resolved?",
    answer: "For queries about Councelling, you can reach us on WhatsApp at +91 74082 52200 or email us at contact@modxeducation.com."
  },
  {
    question: "What areas do you specialize in?",
    answer: "We specialize in career counseling, college admissions guidance, study-abroad programs, and personal development coaching."
  },
  {
    question: "What makes your counseling services unique?",
    answer: "We take a holistic approach to counseling, combining personalized advice, expert knowledge, and a deep understanding of student needs to provide tailored solutions."
  },
  {
    question: "What is the mission of your counseling service?",
    answer: "Our mission is to empower students by providing personalized guidance and resources to help them achieve their academic and career goals."
  }
]

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (
    _event,
    isExpanded
  ) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box  sx={{ml:2,mr:2}}>
      <Typography
        component="h2"
        variant="h2"
        align="center"
        sx={{
          mb: 6,
          color: 'navy',
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 'bold'
        }}
      >
        We answer your questions
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr' },
          gap: 3
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              '&:before': {
                display: 'none',
              },
              borderRadius: '8px !important',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                '& .MuiAccordionSummary-content': {
                  margin: '16px 0',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'navy'
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: '#555',
                  pb: 2
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}

