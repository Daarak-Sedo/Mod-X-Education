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
    question: "Does Doodle To Write Long Articles?",
    answer: "Yes, Doodle is capable of writing long-form articles with proper structure and coherent content. It uses advanced AI to generate comprehensive articles while maintaining context and flow throughout the piece."
  },
  {
    question: "How are AI writers impacting the writing industry?",
    answer: "AI writers are transforming the content creation landscape by automating routine writing tasks, increasing productivity, and providing assistance to human writers. They serve as powerful tools for generating initial drafts and ideas."
  },
  {
    question: "What is Doodle Content Writing Tool?",
    answer: "Doodle is an AI-powered content writing tool that helps create various types of content including articles, blog posts, and marketing copy. It combines natural language processing with creative algorithms to generate human-like text."
  },
  {
    question: "What Languages Does It Supports?",
    answer: "The tool supports multiple languages including English, Spanish, French, German, and several other major languages, making it versatile for global content creation needs."
  },
  {
    question: "How does the learning process of AI Image work?",
    answer: "AI image learning involves training neural networks on vast datasets of images, enabling pattern recognition and understanding of visual elements. This allows the AI to generate and process images effectively."
  },
  {
    question: "What is the benefit of AI tools?",
    answer: "AI tools offer numerous benefits including increased efficiency, consistency in output, 24/7 availability, scalability of content production, and cost-effectiveness for businesses and content creators."
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

