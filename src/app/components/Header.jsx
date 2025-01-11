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
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../public/Modx-Logo.png";
import { useRouter } from "next/navigation";



const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services", child:[{name: "Services", path: "/services"},{name: "ModX Buddy Program", path: "/modx-buddy-program",child: [{name:"item1", path:"item1"},{name:"item2", path:"item2"},]}] },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

const servicesColumn1 = [
  'Comprehensive Education',
  'Pre Admission Services',
  'ModX Buddy Program',
  'Applications & Admission Process',
  'Comprehensive Education Counselling',
]

const servicesColumn2 = [
  'Course and University short listing',
  'Dedicated writer for SOP',
  'visa Application Guide',
  'Interview Preparation',
]

const servicesColumn3 = [
  'Essay brain stroming and Unlimited Editing Sessions',
  'Loan Assistance',
  'Accommodation',
]

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isServicesNestedMenus, setIsServicesNestedMenus] = useState(null)
  


  // Check if the screen width is less than or equal to 600px
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleOpenNavMenuOfServices = (event) => {
    setIsServicesNestedMenus(event.currentTarget)
  }

  const handleCloseNavMenuOfServices = () => {
    setIsServicesNestedMenus(null)
  }

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
              mt:1
            }}
          >
            {/* Left: Logo */}
            <Box sx={{ display: { xs: "none", md: "flex", cursor:"pointer"} }} onClick={()=>     router.push("/")}>
              <Image
                src={Logo}
                alt="Logo"
                width={200}
                height={45}
                loading="lazy"
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
              sx={{
                p: { xs: 2, lg: 0 },
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <EmailIcon color="primary" />
                <Typography variant="body2" color="black">
                  contact@modxeducation.com
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <WhatsAppIcon color="success" />
                <Typography variant="body2" color="black">
                  +91 74082 52200
                </Typography>
              </Stack>

              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#A3C7D6",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#F9B700",
                  },
                  textTransform: "none",
                }}
                onClick={() => setIsContactModalOpen(true)}
              >
                {isSmallScreen
                  ? "Book a Session"
                  : "Claim Your Free Counselling Session"}
              </Button>
            </Stack>
          </Toolbar>

          {/* Navigation Links (Visible on medium and larger screens) */}
          <Box
            sx={{
              marginLeft: "50%",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
              mb: 2,
              mt: 2,
              
            }}
          >
            {pages.map((page, index) => {
              const isActive = pathname === page.path;
              return (
                <Link key={index} href={page.path} passHref onClick={handleCloseNavMenuOfServices} >
                  <Typography
                    variant="body1"
                    sx={{
                      textDecoration: "none",
                      color: isActive ? "#F9B700" : "black",
         
                      "&:hover": {
                        color: "#F9B700",
                      },
                    }}
                    onClick={()=>{handleCloseNavMenuOfServices()
                 
                    }}
                    // onMouseEnter={handleOpenNavMenuOfServices}
                    onMouseEnter={(event) => {
                      if (page.name === "Services") {{handleOpenNavMenuOfServices(event)
                        router.push("/services")
                      
                      } }
                     
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
            <Stack mt={2} spacing={2} ml={1} mr={2}>
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
            </Stack>
          </Box>
        </Drawer>
      </AppBar>
      <ContactModal open={isContactModalOpen} setOpen={setIsContactModalOpen} />
      <Menu
  id="menu-appbar"
  anchorEl={isServicesNestedMenus}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  open={Boolean(isServicesNestedMenus)}
  onClose={handleCloseNavMenuOfServices}
  onMouseLeave={handleCloseNavMenuOfServices}
  // sx={{
  //   display: { xs: 'block', md: 'block' }, // Ensure it shows on all screen sizes
  // }}
  PaperProps={{
    sx: {
      mt: 2, // Adds a 16px margin on top
    },
  }}
  
>
<Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    // backgroundColor: '#F9F6EF',
    padding: 2,
    // border: '1px solid #ccc',

  }}
  onMouseLeave={(event) => {
    handleCloseNavMenuOfServices();
 }}

>
  {[servicesColumn1, servicesColumn2, servicesColumn3].map((column, colIndex) => (
    <Box key={colIndex} sx={{ flex: 1, marginRight: colIndex < 2 ? 2 : 0 }}           >
      {column.map((item, index) => (
        <Typography
          key={index}
          sx={{
            color: '#333',
            marginBottom: 1,
            borderBottom: '1px solid #e0e0e0',
            paddingBottom: 1,
            cursor: 'pointer',
            '&:hover': {
              color: '#F9B700',
            },
          }}
          onClick={()=>{if(item==="ModX Buddy Program") {router.push("/modx-buddy-program")
            setIsServicesNestedMenus(null)
          }else{
            setIsServicesNestedMenus(null)
          }}}

        >
          {item}
        </Typography>
      ))}
    </Box>
  ))}
</Box>

</Menu>

    </>
  );
};

export default Header;
