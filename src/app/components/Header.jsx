"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactModal from "./ContactModal";
import { Grid } from "@mui/material";

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ background: "#F2F8FD" }}>
        <Box>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            {/* Left: Logo */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Image
                src="https://leapscholar.com/blog/wp-content/uploads/2022/11/LeapScholar-header-logo.svg"
                alt="Logo"
                width={150}
                height={50}
              />
            </Box>

            <IconButton
              size="large"
              color="black"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            {/* Center: Contact Details (hidden on small screens) */}
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              // sx={{ display: { xs: "none", md: "flex" } }}
              sx={{
                p:{xs:2,lg:0},
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon color="primary" />
                <Typography variant="body2" color="black">
                  contact@modxeducation.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <WhatsAppIcon color="success" />
                <Typography variant="body2" color="black">
                  +91 74082 52200
                </Typography>
              </Stack>

<Box sx={{mt:20}}>


              <Button
                variant="contained"
                color="primary"
                sx={{
           

                  backgroundColor: "#A3C7D6",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#F9B700",
                  },
                }}
                onClick={() => setIsContactModalOpen(true)}
              >
                Claim Your Free Counselling Session
              </Button>
              </Box>
            </Stack>



          
{/* <Grid container spacing={1} alignItems="center" >
            <Grid item xs={6} md={3}>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon color="primary" />
                <Typography variant="body2" color="black">
                  contact@modxeducation.com
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack direction="row" spacing={1} alignItems="center">
                <WhatsAppIcon color="success" />
                <Typography variant="body2" color="black">
                  +91 74082 52200
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#A3C7D6",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#F9B700",
                  },
                }}
                onClick={() => setIsContactModalOpen(true)}
              >
                Claim Your Free Counselling Session
              </Button>
            </Grid>
          </Grid> */}

          </Toolbar>

          {/* Navigation Links (Visible on medium and larger screens) */}
          <Box
            sx={{
              marginLeft: "50%",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
              mb: 2,
            }}
          >
            {pages.map((page, index) => {
              const isActive = pathname === page.path;
              return (
                <Link key={index} href={page.path} passHref>
                  <Typography
                    variant="body1"
                    sx={{
                      textDecoration: "none",
                      color: isActive ? "#F9B700" : "black",
                      "&:hover": {
                        color: "#F9B700",
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              );
            })}
          </Box>
        </Box>

        {/* Drawer for Small Screens */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", mt: 2 }}>
            <Image
              src="https://leapscholar.com/blog/wp-content/uploads/2022/11/LeapScholar-header-logo.svg"
              alt="Logo"
              width={120}
              height={40}
            />
            <List>
              {pages.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    component="a"
                    href={item.path}
                    sx={{
                      textAlign: "center",
                      "&:hover": { color: "#F9B700" },
                    }}
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
      <ContactModal open={isContactModalOpen} setOpen={setIsContactModalOpen} />
    </>
  );
};

export default Header;
