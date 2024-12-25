"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Grid,
  Stack,
  Autocomplete,
} from "@mui/material";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";

// Modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxHeight: "100vh",
  overflowY:"scroll",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const ContactModal = ({ open, setOpen }) => {
  const handleClose = () => {setOpen(false),formik.resetForm()};

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      city: "",
      query: "",
      course: "",
      intake:{name:"",value:""},
      ielts:{name:"",value:""}
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

  return (
    <div>
      {/* Contact Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-modal-title"
      >
        <Box sx={style}>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography id="contact-modal-title" variant="h6" gutterBottom>
              Request a Contact
            </Typography>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Stack>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
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
            required
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
                <TextField {...params} label="Intake Interested In"
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
                <TextField {...params} label="Do You Have IELTS" 
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
                '& .MuiInputBase-root': {
                  height: '100px', // Increase the height of the input field
                },
                '& .MuiOutlinedInput-root': {
                  height: '100px', // Set the same height for the whole input area
                },
              }}
            />

            {/* Action Buttons */}
            <Box display="flex" justifyContent="end" gap="20px" mt="10px">
              <Button
                onClick={handleClose}
                sx={{ color: "black" }}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                onClick={formik.handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactModal;
