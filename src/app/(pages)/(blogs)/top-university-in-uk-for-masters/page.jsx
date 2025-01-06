"use client";

import {
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const universities = [
  {
    id: 1,
    name: "Imperial College London",
    description:
      "Established in 1907, Imperial College London is one of the best colleges in the UK for masters, specialising in science, engineering, medicine, and business. With 62% of its 20,488 students coming from over 140 countries, it’s a truly international hub. The college also has a diverse staff, with 54% of its faculty from outside the UK.",
    programs: [
      "MSc in Advanced Computing",
      "MSc in Data Science",
      "MSc in Environmental Engineering",
      "MBA",
      "MSc in Finance & Management",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "GPA of 6.75 – 9.0/10 or 55%-70%" },
      { name: "English Language Proficiency", requirement: "IELTS: 6.5, TOEFL: 92" },
      { name: "Relevant Experience (for MBA)", requirement: "At least 3 years of relevant professional experience." },
    ],
  },
  {
    id: 2,
    name: "University of Oxford",
    description:
      "The University of Oxford, dating back to the 11th century, is one of the best universities in the UK for masters. It has 22,000 students, 40% of whom are overseas, and its 44 colleges are spread across the historic city of Oxford. Known for its strength in sciences, Oxford is ranked number one in the world for medicine.",
    programs: [
      "MSc in Advanced Computer Science",
      "MSc in Financial Economics",
      "MSc in Social Data Science",
      "MSc in Psychological Research",
      "MSc in Global Health Science and Epidemiology",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "Overall grade of 60%" },
      { name: "English Language Proficiency", requirement: "IELTS: 7.5, TOEFL: 110" },
      { name: "Standardised Tests", requirement: "Some courses require the GRE or other specific tests." },
    ],
  },
  {
    id: 3,
    name: "University of Cambridge",
    description:
      "With a history dating back to 1209, the University of Cambridge is one of the best universities in the UK for masters. It hosts 21,180 students, 38% of whom pursue postgraduate studies and 61% of whom are international students.",
    programs: [
      "MPhil in Advanced Computer Science",
      "MPhil in Finance",
      "MPhil in Development Studies",
      "MPhil in Education (Digital)",
      "MPhil in Public Policy",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "90% or higher in five or more relevant subjects" },
      { name: "English Language Proficiency", requirement: "IELTS: 7.5, TOEFL: 110" },
      { name: "Standardised Tests", requirement: "Required for specific courses (e.g., MAT, STEP)." },
    ],
  },
  {
    id: 4,
    name: "UCL",
    description:
      "UCL, founded in 1826, is one of the best colleges in the UK for masters. It has 45,671 students, 47% of whom are postgraduates. Nearly 26,184 international students from over 150 countries call UCL home.",
    programs: [
      "MSc in Data Science",
      "MSc in Urban Planning and Policy",
      "MSc in Cognitive Neuroscience",
      "MSc in Management",
      "MSc in Global Health",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "GPA of 3.3 / 4.0 (or equivalent)" },
      { name: "English Language Proficiency", requirement: "IELTS: 7, TOEFL: 96" },
      { name: "Standardised Tests", requirement: "GRE/GMAT for specific courses." },
    ],
  },
  {
    id: 5,
    name: "The University of Edinburgh",
    description:
      "Founded in 1582, the University of Edinburgh is one of the best universities in the UK for masters. With 37,016 students, 32% of whom are postgraduates, and nearly 18,000 international students from 180 countries, Edinburgh offers a truly global learning experience.",
    programs: [
      "MSc in Artificial Intelligence",
      "MSc in Data Science",
      "MSc in International Business",
      "MSc in Sustainable Energy Systems",
      "MSc in Clinical Psychology",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "Overall grade of 80%" },
      { name: "English Language Proficiency", requirement: "IELTS: 6.5, TOEFL: 92" },
    ],
  },
  {
    id: 6,
    name: "The University of Manchester",
    description:
      "Part of the prestigious Russell Group, the University of Manchester is a global leader in research and innovation. With 42,759 students, 30% of whom are postgraduates, and over 19,000 international students, it’s one of the best universities in the UK for masters.",
    programs: [
      "MSc in Data Science",
      "MSc in International Business",
      "MSc in Environmental Management",
      "MSc in Finance",
      "MA in Human Resource Management",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "80-95% overall" },
      { name: "English Language Proficiency", requirement: "IELTS: 5.5, TOEFL: 72" },
    ],
  },
  {
    id: 7,
    name: "King’s College London",
    description:
      "King’s College London, one of the best colleges in the UK for masters, is ranked among the top 40 universities globally (QS 2024). With 34,921 students, 36% at the postgraduate level, and over 15,000 international students, King’s is known for its world-class teaching and research.",
    programs: [
      "MA in International Relations",
      "MA in Digital Asset and Media Management",
      "MA in Public Policy",
      "MSc in Mental Health: Psychological Therapies",
      "MA in War Studies",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "90% overall" },
      { name: "English Language Proficiency", requirement: "IELTS: 7.5, TOEFL: 100" },
    ],
  },
  {
    id: 8,
    name: "The London School of Economics and Political Science (LSE)",
    description:
      "The London School of Economics and Political Science (LSE) is one of the best colleges in the UK for masters, offering a unique social science perspective across 140 postgraduate programs.",
    programs: [
      "MSc in Economics",
      "MSc in International Relations",
      "Master of Public Administration",
      "MSc in Management",
      "MSc in Finance",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "Minimum 70%" },
      { name: "English Language Proficiency", requirement: "IELTS: 7, TOEFL: 107" },
      { name: "Standardised Tests", requirement: "GRE/GMAT may be required for specific programs." },
    ],
  },
  {
    id: 9,
    name: "University of Bristol",
    description:
      "Founded in 1876, the University of Bristol is a member of the prestigious Russell Group and is recognised as one of the best universities in the UK for masters. It offers a vibrant and diverse learning environment.",
    programs: [
      "MSc in Robotics",
      "MSc in Data Science",
      "MA in International Relations",
      "MSc in Environmental Sustainability",
      "MA in Education",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "70-80%" },
      { name: "English Language Proficiency", requirement: "IELTS: 7, TOEFL: 95" },
    ],
  },
  {
    id: 10,
    name: "The University of Warwick",
    description:
      "The University of Warwick, founded on boldness and collaboration, is one of the best universities in the UK for masters. Warwick is a global hub for academic excellence.",
    programs: [
      "MA in International Political Economy",
      "MBA",
      "MRes Economics",
      "MA History",
      "MA Global Governance",
    ],
    criteria: [
      { name: "Academic Requirements", requirement: "Minimum 85%" },
      { name: "English Language Proficiency", requirement: "IELTS: 6.5, TOEFL: 90" },
      { name: "Work Experience", requirement: "Typically required for MBA and some MSc programs." },
    ],
  },
];


export default function MastersUniversitiesList() {
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
          mb: 4,
          mt:10
        }}
      >
        Top 10 Universities in UK for Masters
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          lineHeight: 1.8,
          color: "text.secondary",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 2rem",
        }}
      >
        The UK is home to some of the best universities in the world, with
        nearly 90 of them ranked in the QS World University Rankings 2025. These
        top institutions are known for their academic excellence and the diverse
        range of master’s programs they offer. Here is an overview of the top 10
        universities in the UK for masters.
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          p: { xs: 2, sm: 4 },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {universities.map((university) => (
          <Grid item xs={12} sm={6} key={university.id}>
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                fontWeight: "bold",
                color: "primary.dark",
                mb: 2,
              }}
            >
              {university.id}. {university.name}
            </Typography>

            <Typography
              variant="body2"
              paragraph
              sx={{
                color: "text.secondary",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              {university.description}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "primary.main",
                mb: 2,
              }}
            >
              Top Programs
            </Typography>
            <ul style={{ paddingLeft: "1rem", marginBottom: "2rem" }}>
              {university.programs.map((program, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "0.5rem",
                    color: "rgba(0, 0, 0, 0.8)",
                    listStyleType: "circle",
                  }}
                >
                  {program}
                </li>
              ))}
            </ul>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "primary.main",
                mb: 2,
              }}
            >
              Eligibility Criteria
            </Typography>

            <TableContainer
              component={Paper}
              sx={{
                mb: 4,
                boxShadow: 2,
                borderRadius: 2,
                border: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "grey.100" }}>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "text.primary",
                      }}
                    >
                      Criteria
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "text.primary",
                      }}
                    >
                      Requirement
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {university.criteria.map((criterion, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:nth-of-type(odd)": { bgcolor: "grey.50" },
                      }}
                    >
                      <TableCell sx={{ color: "text.secondary" }}>
                        {criterion.name}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "text.secondary",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {criterion.requirement}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
