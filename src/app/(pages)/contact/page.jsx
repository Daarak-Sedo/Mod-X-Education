"use client";

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  TextField,
  Stack,
  Button,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";

export default function Page() {
  const faqData = [
    {
      question: "What are your business hours?",
      answer:
        "Our business hours are Monday to Friday, 9:00 AM to 5:00 PM (EST).",
    },
    {
      question: "How can I track my order?",
      answer:
        'You can track your order by logging into your account and visiting the "Order History" section.',
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Please check our shipping policy for more details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Please refer to our returns page for full details and conditions.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      city: "",
      query: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      number: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      city: Yup.string().required("City is required"),
      query: Yup.string().required("Please enter your query"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  const [expanded, setExpanded] = useState(false);

  const handleAccordianChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(90.56deg, rgba(10, 47, 140, 0.8) 0.49%, rgba(37, 137, 202, 0.8) 99.55%), url("https://www.metaversitytechnologies.com/static/contactUs-1k-f8f3ded12e0d46b8567dbd54b552b915.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "700px",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            color="white"
            sx={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              borderBottom: "4px solid #F9B700",
              width: "20%",
              alignItems: "center",
              ml: "40%",
            }}
          ></Box>
          <Typography
            variant="h6"
            align="center"
            color="white"
            sx={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            We Are Happy To Be Part Of Your new Beginning and excited about
            walking through the beautiful journey together!
          </Typography>
        </Container>
      </Box>

<Box sx={{display:'flex', flexDirection:"column", gap:8,mb:6}}>


      <Box sx={{ ml: 2, mr: 2, mt: 8 }}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          sx={{
            mb: 6,
            color: "navy",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "bold",
          }}
        >
          We answer your questions
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr" },
            gap: 3,
          }}
        >
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleAccordianChange(`panel${index}`)}
              sx={{
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                "&:before": {
                  display: "none",
                },
                borderRadius: "8px !important",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    margin: "16px 0",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "navy",
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#555",
                    pb: 2,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      <Container sx={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",p:2}} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Get in Touch
        </Typography>

        <Box
          component="form"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 ,}}
        >
          {/* Name */}

          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          {/* Email */}

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          {/* Number */}

          <TextField
            fullWidth
            label="Phone Number"
            name="number"
            type="tel"
            variant="outlined"
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          />

          {/* City */}

          <TextField
            fullWidth
            label="City"
            name="city"
            variant="outlined"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />

          {/* Query */}

          <TextField
            fullWidth
            label="Your Query"
            name="query"
            variant="outlined"
            multiline
            rows={4}
            value={formik.values.query}
            onChange={formik.handleChange}
            error={formik.touched.query && Boolean(formik.errors.query)}
            helperText={formik.touched.query && formik.errors.query}
          />

          {/* Action Buttons */}
          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              onClick={formik.handleSubmit}
              sx={{ width: "30%" }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>

      <Box sx={{ ml: 2, mr: 2 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Stack direction={"row"} gap="40px">

     
        <Box display="flex" alignItems="center" mb={2}>
          <LocationOnIcon sx={{ mr: 2 }} />
          <Typography>123 Business Street, City, State 12345</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <PhoneIcon sx={{ mr: 2 }} />
          <Typography>(123) 456-7890</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <EmailIcon sx={{ mr: 2 }} />
          <Typography>info@example.com</Typography>
        </Box>
        </Stack>

        <Box sx={{ width: "100%", height: "300px", position: "relative" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98657848505519!3d40.74844097932711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621531234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      </Box>

    
      </Box>
    </>
  );
}
