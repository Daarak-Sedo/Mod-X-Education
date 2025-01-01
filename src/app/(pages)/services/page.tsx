import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkIcon from "@mui/icons-material/Work";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";


const services = [
  {
    title: "Comprehensive Education Counselling",
    description:
      "Deciding to study abroad marks an important milestone. At Study Smart, we’re dedicated to helping you find more than just selecting the right country or university. We’re here to assist you in aligning your academic journey with your future aspirations by helping you choose the right academic program. Consider us your guide through this process. We envision breathing life into every study-abroad aspirant by offering you insights and support attuned to your needs.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818315.jpg",
  },
  {
    title: "Profiling & Career Guidance",
    description:
      "Your route to studying abroad is uniquely yours. We evaluate your academic achievements, financial background, and career aspirations by leveraging sophisticated profiling tools. We aim to align your educational journey with global job markets seeking talents, transforming your study abroad experience into a strategic career move.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818273.jpg",
  },
  {
    title: "Country, University & Course Selection",
    description:
      "Choosing from thousands of universities and popular study destinations can seem overwhelming. Imagine having a guide with insider knowledge to simplify and demystify the process. Our Study Smart team, enriched with personal experiences and extensive feedback from a global network of students, brings clarity to your options. They focus on helping you select career-oriented and job-focused courses, ensuring your choices align perfectly with both your personal and professional ambitions.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818234.jpg",
  },
  {
    title: "Applications & Admission Process",
    description:
      "The application journey can feel nerve-wracking. We aim to change that. With our support, we make the process smoother, boosting your chances of getting selected. Our team helps you craft standout applications. We assist with engaging statements of purpose and persuasive recommendation letters. With Study Smart’s guidance, each part of your application will showcase your talents and highlight your strengths, significantly improving your chances of getting accepted by your dream university.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818147.jpg",
  },
  {
    title: "Test Preparation",
    description:
      "Achieving top scores in English proficiency tests like IELTS and PTE is your gateway to global education. Our preparation programs are curated to help you pass with flying colours. Boasting a 97% pass rate and having trained over 14,000 students, our flexible online and in-person options prepare you to approach these tests confidently. With Study Smart, you ensure securing scores that open doors to your dream universities. Become a part of our success story.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818125.jpg",
  },
  {
    title: "Interview Preparations",
    description:
      "Facing university and visa interview is a significant step towards studying abroad. We are here to transform this crucial phase into an opportunity for success. Our interview preparation services ensure you cruise through each interview with confidence. With expert advice from our seasoned counsellors, mock interviews, and strategies for delivering compelling responses, we equip you with the much-needed skills to help cast a winning impression.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818085.jpg",
  },
  {
    title: "Scholarship Assistance",
    description:
      "Study Smart is dedicated to guiding students through the scholarship application process with a hands-on approach. Our team works closely with each student, identifying scholarships that align with their academic achievements and career goals. We provide comprehensive support, from filling out applications to crafting standout scholarship essays. Our success is evident, as we have secured 7 million USD in scholarships for our students. By making the scholarship application process painless, we make sure students have the resources and guidance needed to pursue financial support for their education.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818055.jpg",
  },
  {
    title: "Loan Assistance",
    description:
      "We have partnered with many leading banks in the private and public sectors to support our students in navigating the education loan process and securing additional financial aid. Navigating through the loan application can be intricate, often requiring a significant amount of documentation. Our association with these banks help students get through the documentation process smoothly, improving the chances of loan approval.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721818008.jpg",
  },
  {
    title: "Visa Documentation",
    description:
      "Securing a visa is just as crucial as gaining admission to your dream university. We take the hassle out of visa application, making it straightforward and stress-free. Our team comprises former high commission employees who have the insider knowledge and experience to steer you through the visa application process. This unique insight, coupled with our 98% visa success rate, ensures a smooth process and sets the stage for your successful study abroad journey.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721817941.jpg",
  },
  {
    title: "Pre Departure Services",
    description:
      "We offer pre-departure sessions to students to familiarise them with all important details before they begin their journey to another country. We assist with FOREX, flight tickets, medical checks, packing lists and all other critical aspects they will need to handle before their flight.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721817632.jpg",
  },
  {
    title: "Accommodation",
    description:
      "Accommodation is an integral part of your university experience. At Study Smart, we understand how important it is to manage your finances. That’s why we provide tailored support to help you find accommodation that fits your budget. Whether you’re looking for the comforts of university campus life or the freedom of private accommodation, we have you covered. We partner with different accommodation agencies to offer a wide range of options. This partnership means we can present options that fit your budget, lifestyle, and study needs.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721817596.jpg",
  },
  {
    title: "Essential Services",
    description:
      "Securing admission to your dream university is just the beginning. There are so many practical aspects to consider when studying abroad. We provide essential services to make your move worry-free. For your financial needs abroad, we arrange foreign exchange services. To keep you connected right away, we provide SIM card solutions. Our team ensures you safely reach your accommodation or university with our pick-up and drop-off services. Furthermore, we facilitate networking opportunities with other students in your city or university, helping you forge valuable connections. We also assist with flight ticket bookings, making your journey to your educational goals as painless as possible.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721817534.jpg",
  },
  {
    title: "Post Departure Services",
    description:
      "Your journey doesn’t end when you land. With our extensive support network and alums community, we’re here to help you settle in, adapt, and thrive in your new environment. From day one, we ensure you have the support you need to make the most of your study abroad experience.",
    imageUrl: "https://studysmart.co.in/storage/uploads/service/1721817493.jpg",
  },
];

export default function ServicesPage() {
  return (
    <Box sx={{ mb:2,mt:10 }}>

        <Box textAlign="center" mb={8} >
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
            Our Services
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
            Professional counseling services to support your mental health and
            personal growth
          </Typography>
        </Box>

        <Box >
          {services.map((service, index) => (
            <Grid
              container
              key={index}
              spacing={4}
              sx={{ my: 4, background: index % 2 === 0 ? "white" : "#F2F8FD",px:4}}
              direction={index % 2 === 0 ? "row" : "row-reverse"}
            >
              <Grid
                item
                xs={12}
                md={6}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-up"}
              >
                        <Box sx={{ position: 'relative', height: 300,mb:4 ,mr:2}}>

                      
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "8px" }}
                />
                  </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                data-aos="fade-up"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" color={"#546e7a"}>{service.description}</Typography>
              </Grid>
            </Grid>
          ))}
        </Box>

    </Box>
  );
}
