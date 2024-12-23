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
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const ContactModal = ({open,setOpen}) => {
  const handleClose = () => setOpen(false);

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
            <CloseIcon sx={{cursor:"pointer"}} onClick={handleClose}/>
          </Stack>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
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
            <Box display="flex" justifyContent="end" gap="20px">
              <Button onClick={handleClose} color="secondary">
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
