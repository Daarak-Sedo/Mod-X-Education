import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";

function SupportDialog({open, handleClose}) {

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 'bold' }}>
          Beyond Admission – Ongoing Support
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Typography variant="body1" paragraph>
            Unlike other consultants, our support doesn’t end with your
            admission. Through our <b>ModX Buddy Program</b>, we offer:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Networking opportunities across the UK to help you build a community abroad." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="From landing in the UK to any and everything small or big, we help you every step of the way." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Assistance with opening a bank account, securing part-time and full-time jobs, and navigating your new environment." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Career coaching to help you build a professional network and achieve your long-term goals." />
            </ListItem>
          </List>
          <Typography variant="body1" paragraph>
            At ModX Education, we’re more than just consultants—we’re your
            partners in success, ensuring that your UK education journey is
            smooth, enriching, and rewarding.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SupportDialog;
