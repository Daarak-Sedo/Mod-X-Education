"use client";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardActionArea,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarIcon from "@mui/icons-material/Star";
// import GroupIcon from "@mui/icons-material/Group";
// import SchoolIcon from "@mui/icons-material/School";
import Diversity3Icon from "@mui/icons-material/Diversity3";
// import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupIcon from "@mui/icons-material/Group";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";

export default function ModXBuddyProgram() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box textAlign="center" mb={12} mt={12}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            //   fontSize: isMobile ? '2.5rem' : '3.5rem',
            color: "#1a237e",
          }}
        >
          ModX Buddy Program
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#546e7a",
            maxWidth: "800px",
            mx: "auto",
            mb: 4,
          }}
        >
          Personalised Peer Support for a Seamless Transition
        </Typography>
      </Box>

      <Box sx={{ mt: 4, mx: 6, mb: 10 }}>
        <Typography variant="body1" paragraph>
          The{" "}
          <span
            style={{
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            ModX Buddy Program
          </span>{" "}
          is a standout initiative designed to make students feel supported,
          connected, and prepared for life in the UK. Moving to a new country
          can be overwhelming, and having a trusted peer who has already
          navigated the challenges can be a game-changer. This program pairs
          each student with a dedicated {" "}
          <span
            style={{
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            ModX Buddy
          </span>{" "}—a current or former UK
          student who shares insights, advice, and real-world tips to help them
          transition effortlessly.
        </Typography>

        {/* How It Works Section */}

        <Typography variant="h4" sx={{ mt: 8, mb: 3, fontWeight: "bold" }}>
          How It Works
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {[
            {
              number: 1,
              title: "Personalised Pairing",
              points: [
                "Each student is matched with a buddy based on their field of study, university, or shared interests.",
                "This ensures a tailored experience where the buddy can offer the most practical and relevant advice.",
              ],
              icon: GroupIcon,
            },
            {
              number: 2,
              title: "Onboarding Support",
              points: [
                "Before departure, the ModX Buddy connects with the student to answer questions about daily life in the UK.",
                "Topics include housing options, weather preparedness, packing tips, and cultural nuances.",
              ],
              icon: FlightTakeoffIcon,
            },
            {
              number: 3,
              title: "Arrival Guidance",
              points: [
                "Buddies help students navigate the immediate challenges of settling in, like finding local supermarkets, understanding public transport, or setting up a UK phone number.",
                "They may even offer a virtual or in-person campus tour for students.",
              ],
              icon: MapIcon,
            },
            {
              number: 4,
              title: "Cultural and Social Integration",
              points: [
                "Buddies share advice on building a social circle, participating in university clubs, and exploring local events.",
                "They introduce students to cultural norms and etiquette, helping them feel more at home.",
              ],
              icon: FavoriteIcon,
            },
            {
              number: 5,
              title: "Academic Insights",
              points: [
                "Buddies provide tips on academic expectations, managing coursework, and accessing campus resources like libraries, labs, and career services.",
              ],
              icon: SchoolIcon,
            },
            {
              number: 6,
              title: "Career Tips",
              points: [
                "For those looking for part-time work, buddies share job-hunting strategies, recommend employers, and guide them through applications and interviews.",
              ],
              icon: ApartmentIcon,
            },
          ]?.map((feature) => (
            <Card
              key={feature.number}
              sx={{
                p: 3,
                borderRadius: "12px",
                boxShadow:
                  "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                transition: "transform 0.3s, box-shadow 0.3s",
                // "&:hover": {
                //   boxShadow:
                //     "0px 6px 10px rgba(0,0,0,0.14), 0px 1px 18px rgba(0,0,0,0.12), 0px 3px 5px rgba(0,0,0,0.2)",
                // },
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    bgcolor: "#eaecee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "black", fontWeight: 600 }}
                  >
                    {feature.number}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1.5,
                    }}
                  >
                    <feature.icon size={20} style={{ color: "#1976d2" }} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Arial, sans-serif", // Change font family
                        fontWeight: "bold", // Optional: make it bold
                        color: "#2196f3",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  <List
                    sx={{
                      listStyleType: "disc",
                      pl: 2,
                      "& .MuiListItem-root": {
                        display: "list-item",
                        pl: 1,
                        color: "text.secondary",
                      },
                    }}
                  >
                    {feature.points.map((point, index) => (
                      <ListItem key={index}>{point}</ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Key Features Section */}
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{ mt: 8, mb: 3 }}
        >
          Key Features of the ModX Buddy Program
        </Typography>
        <List>
          {[
            "Proactive Communication",
            "Real-Life Stories",
            "Continuous Engagement",
          ].map((feature, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="#eaecee" />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                secondary={getKeyFeatureDescription(feature)}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: "Arial, sans-serif", // Change font family
                    fontWeight: "bold", // Optional: make it bold
                    color: "#2196f3", // Change the text color (you can use any color code)
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* Why Students Love It Section */}
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{ mt: 8, mb: 3 }}
        >
          Why Students Love It
        </Typography>
        <Grid container spacing={3}>
          {[
            "Practical Help",
            "Emotional Support",
            "Networking Opportunities",
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "12px",
                  background: "linear-gradient(145deg, #f0f4f8, #ffffff)",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow:
                      "0px 6px 10px rgba(0,0,0,0.14), 0px 1px 18px rgba(0,0,0,0.12), 0px 3px 5px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="h4"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        color: "#2196f3",
                      }}
                    >
                      {item}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {getWhyStudentsLoveItDescription(item)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Why It Sets ModX Apart Section */}
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{ mt: 6, mb: 3 }}
        >
          Why It Sets ModX Apart
        </Typography>
        <List>
          {["Human Touch", "Bridging the Gap", "Alumni Connection"].map(
            (item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <StarIcon color="#eaecee" />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  secondary={getWhyItSetsModXApartDescription(item)}
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: "Arial, sans-serif", // Change font family
                      fontWeight: "bold", // Optional: make it bold
                      color: "#2196f3", // Change the text color (you can use any color code)
                    },
                  }}
                />
              </ListItem>
            )
          )}
        </List>

        {/* Values Section */}
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{ mt: 6, mb: 3 }}
        >
          Our Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
        {["Collaboration", "Hard Work", "Integrity", "Community Involvement"].map(
          (value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  p: 3,
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                  },
                  background: "linear-gradient(145deg, #f0f4f8, #ffffff)",
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    fontSize: "2rem",
                    color: "secondary.main",
                  }}
                >
                  {getValueIcon(value)}
                </Box>
                <Typography
                  variant="h6"
                  component="h4"
                  gutterBottom
                  sx={{ fontFamily: "Arial, sans-serif", // Change font family
                    fontWeight: "bold", // Optional: make it bold
                    color: "#2196f3", }}
                >
                  {value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {getValueDescription(value)}
                </Typography>
              </Card>
            </Grid>
          )
        )}
      </Grid>
      </Box>
    </Box>
  );
}

function getHowItWorksDescription(item) {
  switch (item) {
    case "Personalised Pairing":
      return "Each student is matched with a buddy based on their field of study, university, or shared interests.";
    case "Onboarding Support":
      return "Before departure, the ModX Buddy connects with the student to answer questions about daily life in the UK.";
    case "Arrival Guidance":
      return "Buddies help students navigate the immediate challenges of settling in, like finding local supermarkets or understanding public transport.";
    case "Cultural and Social Integration":
      return "Buddies share advice on building a social circle, participating in university clubs, and exploring local events.";
    case "Academic Insights":
      return "Buddies provide tips on academic expectations, managing coursework, and accessing campus resources.";
    case "Career Tips":
      return "For those looking for part-time work, buddies share job-hunting strategies and guide them through applications and interviews.";
    default:
      return "";
  }
}

function getKeyFeatureDescription(feature) {
  switch (feature) {
    case "Proactive Communication":
      return "Buddies reach out regularly, offering support at critical milestones such as pre-departure, arrival, and the first few months of university life.";
    case "Real-Life Stories":
      return "Buddies share their own experiences, challenges, and successes, giving students a relatable perspective on adapting to life abroad.";
    case "Continuous Engagement":
      return "The buddy relationship lasts for the entire first year, ensuring students have ongoing support during their adjustment period.";
    default:
      return "";
  }
}

function getWhyStudentsLoveItDescription(item) {
  switch (item) {
    case "Practical Help":
      return "Answers no website or guidebook can offer, like the best coffee shop near campus or the easiest route to class.";
    case "Emotional Support":
      return "Having a friendly, experienced peer eases the anxiety of being in a new environment.";
    case "Networking Opportunities":
      return "Buddies often introduce students to their own social and professional circles, creating valuable connections.";
    default:
      return "";
  }
}

function getWhyItSetsModXApartDescription(item) {
  switch (item) {
    case "Human Touch":
      return "Unlike many consulting services that rely solely on formal advice, the buddy program fosters a genuine sense of community.";
    case "Bridging the Gap":
      return "Buddies make it easy for students to transition from theoretical planning to real-life application.";
    case "Alumni Connection":
      return "Over time, ModX Buddies can evolve into a thriving alumni network, strengthening your personal brand.";
    default:
      return "";
  }
}

function getValueDescription(value) {
  switch (value) {
    case "Collaboration":
      return "We believe in the power of teamwork. By fostering strong partnerships, we create innovative solutions that drive success for all.";
    case "Hard Work":
      return "We are committed to excellence through dedication and perseverance. Every challenge is an opportunity to grow and deliver the best outcomes for our students.";
    case "Integrity":
      return "Trust and transparency are at the heart of what we do. We hold ourselves to the highest ethical standards, ensuring honesty and fairness in all our interactions.";
    case "Community Involvement":
      return "We are passionate about giving back. For every successful admission, we fund the school books of a primary school kid, for a year.";
    default:
      return "";
  }
}

function getValueIcon(value) {
  switch (value) {
    case "Collaboration":
      return <GroupIcon fontSize="large" color="primary" />;
    case "Hard Work":
      return <SchoolIcon fontSize="large" color="primary" />;
    case "Integrity":
      return <CheckCircleOutlineIcon fontSize="large" color="primary" />;
    case "Community Involvement":
      return <Diversity3Icon fontSize="large" color="primary" />;
    default:
      return null;
  }
}
