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
  Autocomplete,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Page() {
  const faqData = [
    {
      question: "What are your business hours?",
      answer:
        "Our business hours are Monday to Friday, 9:00 AM to 5:00 PM (EST).",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach us on WhatsApp at +91 74082 52200 or email us at contact@modxeducation.com.",
    },
    {
      question: "Do you offer counseling services?",
      answer:
        "Yes, we offer professional counseling services to assist students in their academic and career paths.",
    },
    {
      question: "What kind of counseling services do you provide?",
      answer:
        "We provide career guidance, college admissions support, and personal development counseling.",
    },
    {
      question: "Is there a fee for your counseling services?",
      answer:
        "Yes, we have both free and premium counseling packages. Contact us for detailed pricing information.",
    },
    {
      question: "How can I book a counseling session?",
      answer:
        "You can book a session by contacting us through WhatsApp or email, or directly through our website.",
    },
    {
      question: "Do you offer online counseling sessions?",
      answer:
        "Yes, we offer both in-person and online counseling sessions to accommodate your preferences.",
    },
    {
      question: "Can parents attend the counseling sessions?",
      answer:
        "Yes, parents are welcome to join the sessions to better support their child’s education journey.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    query: "",
    message: "",
    course: "",
    intake: { name: "", value: "" },
    ielts: { name: "", value: "" },
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
      course: "",
      intake: { name: "", value: "" },
      ielts: { name: "", value: "" },
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
      course: Yup.string().required("Please enter your Taeget Course"),
      //   intake: Yup.object({
      //     name: Yup.string().required("Intake is required"),
      //   }).nullable().required("Intake is required"), // Validate as an object and ensure it's selected
      //   ielts: Yup.object({
      //     name: Yup.string().required("Please select an option"),
      //   }).nullable().required("Please select an option"),
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

      <Box sx={{ display: "flex", flexDirection: "column", gap: 8, mb: 6 }}>
        <Box sx={{  mt: 8 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 6,
              color: "black",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Container
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
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
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
          </Container>
        </Box>

        <Grid
          container
          spacing={4}
          sx={{ px: 4, py: 6, background: "#EFEFEF" }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Box>
                <Typography color="error" fontWeight="bold" variant="h5">
                  <span
                    style={{ borderBottom: "3px solid #d32f2f", width: "20%" }}
                  >
                    QUICK
                  </span>{" "}
                  CONTACT
                </Typography>
                <Typography variant="h4" fontWeight="bold" gutterBottom mt={2}>
                  Have Questions?
                </Typography>
                <Typography variant="h4" fontWeight="bold">
                  Don't Hesitate to Contact Us
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 2 }}>
                  We're happy to clear your Queries.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <PlaceIcon color="error" />
                  <Box>
                    <Typography fontWeight="bold">Location</Typography>
                    <Typography color="text.secondary">
                      123 Business Street, City, State 12345
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <PhoneIcon color="error" />
                  <Box>
                    <Typography fontWeight="bold">Quick Contact</Typography>
                    <Typography color="text.secondary">
                      Phone: +91 74082 52200
                    </Typography>
                    <Typography color="text.secondary">
                      Email: contact@modxeducation.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <AccessTimeIcon color="error" />
                  <Box>
                    <Typography fontWeight="bold">Opening Hrs</Typography>
                    <Typography color="text.secondary">
                      Monday - Saturday: 09.00 am to 07.00 pm
                    </Typography>
                    <Typography color="text.secondary">
                      Sunday: Closed
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography color="error" fontWeight="bold" variant="h5">
                <span
                  style={{ borderBottom: "3px solid #d32f2f", width: "20%" }}
                >
                  LET’S
                </span>{" "}
                CONNECT
              </Typography>

              <Typography variant="h4" fontWeight="bold" gutterBottom mt={2}>
                Send Your Message
              </Typography>

              <Typography color="text.secondary" sx={{ mt: 2 }}>
                Please feel free to get in touch with us using the contact form
                below. We'd love to hear for you.
              </Typography>
            </Box>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                p: 4,
                borderRadius: 2,
                mt: 1,
                background: "white",
                maxWidth: "500px",
              }}
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Name */}

              <TextField
                required
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
                required
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
                required
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

              <TextField
                fullWidth
                label="Target Course"
                name="course"
                variant="outlined"
                value={formik.values.course}
                onChange={formik.handleChange}
                error={formik.touched.course && Boolean(formik.errors.course)}
                helperText={formik.touched.course && formik.errors.course}
              />

              <Autocomplete
                disablePortal
                options={[
                  { name: "January", value: "january" },
                  { name: "February", value: "february" },
                ]}
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.name}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Intake Interested In"
                    // error={formik.errors.intake}
                    // helperText={formik.touched.intake?.name && formik.errors.intake?.name}
                  />
                )}
              />

              <Autocomplete
                disablePortal
                options={[
                  { name: "Yes", value: "yes" },
                  { name: "No", value: "no" },
                ]}
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                  <Box component="li" {...props}>
                    {option.name}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Do You Have IELTS"
                    // error={formik.errors.ielts }
                    // helperText={formik.touched.ielts && formik.errors.ielts}
                  />
                )}
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
                sx={{
                  "& .MuiInputBase-root": {
                    height: "100px", // Increase the height of the input field
                  },
                  "& .MuiOutlinedInput-root": {
                    height: "100px", // Set the same height for the whole input area
                  },
                }}
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
          </Grid>
        </Grid>

        <Box sx={{ ml: 2, mr: 2 }}>
          <Typography variant="h4" gutterBottom color="navy">
            Contact Us
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }} // Column on small screens, row on larger screens
            gap={{ xs: "20px", sm: "40px" }} // Adjust gap for different screen sizes
            alignItems={{ xs: "flex-start", sm: "center" }} // Align items appropriately
          >
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon sx={{ mr: 2 }} color="error" />
              <Typography>123 Business Street, City, State 12345</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon sx={{ mr: 2, color: "#4CAF50" }} />
              <Typography>+91 74082 52200</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <EmailIcon sx={{ mr: 2, color: "#2196F3" }} />
              <Typography>contact@modxeducation.com</Typography>
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
