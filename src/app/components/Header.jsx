"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import { Stack } from "@mui/material";
import ContactModal from "./ContactModal";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" }
];

const Header = () => {
  const pathname = usePathname()
  console.log("path",pathname)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Image
          src="https://leapscholar.com/blog/wp-content/uploads/2022/11/LeapScholar-header-logo.svg"
          alt="Logo"
          width={120}
          height={40}
        />
      </Box>
      <List>
        {pages.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Image
                  src="https://leapscholar.com/blog/wp-content/uploads/2022/11/LeapScholar-header-logo.svg"
                  alt="Logo"
                  width={150}
                  height={50}
                />
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
           
            </Box>

            <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: "20px" }}>
  {pages.map((page, index) => {
    const isActive = pathname === page.path;
    return (
      <Box
        key={index}
        component="a"
        href={page.path}
        sx={{
          textDecoration: "none",
          color: isActive ? "#F9B700" : "",
          px: 2,
          py: 1,
          borderRadius: 1,
          '&:hover': {
            color: "#F9B700",
          },
        }}
      >
        {page.name}
      </Box>
    );
  })}
</Box>


              <Button
                variant="contained"
                color="primary"
                sx={{
                  height: "40px",
                  '&:hover': {
                    background: "#F9B700",
                  }
                }}
                onClick={() => setIsContactModalOpen(true)}
              >
                Request A Call Back
              </Button>
            </Stack>
          </Toolbar>
        </Container>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
      <ContactModal open={isContactModalOpen} setOpen={setIsContactModalOpen} />
    </>
  );
};

export default Header;
