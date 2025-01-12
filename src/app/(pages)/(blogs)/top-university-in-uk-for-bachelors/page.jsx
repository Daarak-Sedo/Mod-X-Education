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
  Container,
  Box,
} from "@mui/material";

const universities = [
    {
      id: 1,
      name: "University of Cambridge",
      ranking: 2,
      description: "The University of Cambridge, founded in 1209, is among the best business schools in the UK for undergraduate studies. With over 18,000 students, including 4,000 international students from 120+ countries, it offers a global learning experience. Known for its unique college supervision and research excellence, Cambridge boasts over 100 libraries and a history of 92 Nobel Prize winners, making it a top choice for aspiring business leaders.",
      courses: [
        { name: "MSt in Entrepreneurship", fees: "INR 43.2L (£39.6K)" },
        { name: "Executive MBA", fees: "INR 1Cr (£93.3K)" },
        { name: "The Cambridge MBA", fees: "INR 80.8L (£74K)" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 7 },
        { test: "TOEFL", score: 100 }
      ],
      notableAlumni: [
        { name: "Stephen Hawking", description: "Theoretical Physicist, Cosmologist" },
        { name: "Charles Darwin", description: "Naturalist, Biologist" }
      ]
    },
    {
      id: 2,
      name: "University of Oxford",
      ranking: 3,
      description: "Founded in 1096, the oldest university in the English-speaking world, the University of Oxford, is among the best business schools in the UK for undergraduate studies. With 22,000 students, including 40% international students, Oxford offers a rich global experience. Its alumni network includes 26 Nobel Prize winners and 30 world leaders, solidifying its reputation as a top institution for academic excellence.",
      courses: [
        { name: "Oxford Executive MBA", fees: "INR 1.27Cr (£117K)" },
        { name: "Oxford MBA", fees: "INR 91.4L (£83.7K)" },
        { name: "MSc Major Programme Management", fees: "INR 63L (£57.7K)" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 7.5 },
        { test: "TOEFL", score: 110 }
      ],
      notableAlumni: [
        { name: "J.R.R. Tolkien", description: "Author, Philologist" },
        { name: "Margaret Thatcher", description: "Former Prime Minister" }
      ]
    },
    {
      id: 3,
      name: "London School of Economics and Political Science",
      ranking: 50,
      description: "Established in 1895, the London School of Economics and Political Science (LSE) is regarded as one of the best universities for business management in the UK, especially in economics, politics, and law. With 16 Nobel Prize winners and 37 world leaders among its alumni, LSE attracts 9,600 students from 140 countries. It offers global partnerships and a prime location in central London.",
      courses: [
        { name: "BSc Management", fees: "INR 37.1L (£34K)" },
        { name: "MSc Management", fees: "INR 44.7L (£41K)" },
        { name: "Global Master's in Management", fees: "INR 42.6L (£39K)" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 7 },
        { test: "TOEFL", score: 100 }
      ],
      notableAlumni: [
        { name: "George Soros", description: "Investor, Philanthropist" },
        { name: "John F. Kennedy", description: "Former U.S. President" }
      ]
    },
    {
      id: 4,
      name: "UCL",
      ranking: 9,
      description: "University College London (UCL), founded in 1826, is one of the best universities for business management in the UK. With nearly 36,000 students from 150 countries and 29 Nobel Prize winners, UCL offers a diverse and innovative learning experience. Located in London, UCL is a leader in research and education across its 11 faculties, making it a top choice for aspiring business leaders.",
      courses: [
        { name: "International Management BSc", fees: "INR 36L (£33K)" },
        { name: "MSc Management", fees: "INR 43.3L (£39.8K)" },
        { name: "MSc Entrepreneurship", fees: "INR 43.4L (£39.8K)" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 7 },
        { test: "TOEFL", score: 100 }
      ],
      notableAlumni: [
        { name: "David Miliband", description: "Politician, Former MP" },
        { name: "Alexander Graham Bell", description: "Inventor, Scientist" }
      ]
    },
    {
      id: 5,
      name: "University of Warwick",
      ranking: 69,
      description: "Established in 1965, the University of Warwick is one of the top universities in the UK for MBA programs. With 30 academic departments and a student body comprising 45% international students, Warwick excels in research and education. The campus features a vast library and a vibrant student life, with one of the largest student unions in the UK.",
      courses: [
        { name: "BSc International Management", fees: "INR 36.5L (£33.5K)" },
        { name: "MSc Management", fees: "INR 40.6L (£37.2K)" },
        { name: "MBA", fees: "INR 62.8L (£57.5K)" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 7 },
        { test: "PTE", score: 65 }
      ],
      notableAlumni: [
        { name: "Chris Martin", description: "Musician (Lead Singer of Coldplay)" },
        { name: "David Beckham", description: "Former Professional Footballer" }
      ]
    },
    {
      id: 6,
      name: "University of Manchester",
      ranking: 34,
      description: "The University of Manchester, founded in 1824, is one of the top universities in the UK for MBA programs. It is known for its global impact and research excellence. With 44,000 students and 25 Nobel laureates, the university continues to lead in innovation and social responsibility. What's more? The university ranks first in the UK and Europe for social and environmental impact, making it a top choice for aspiring business leaders.",
      courses: [
        { name: "BSc (Hons) Management", fees: "INR 34.4L (£31.5K)" },
        { name: "MSc Management", fees: "INR 34.4L (£31.5K)" },
        { name: "MSc Business Analytics", fees: "INR 37.1L (£34K)" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 6.5 },
        { test: "TOEFL", score: 90 }
      ],
      notableAlumni: [
        { name: "Sir Jonathan Bate", description: "Professor, Literary Scholar" },
        { name: "Benedict Cumberbatch", description: "Actor" }
      ]
    },
    {
      id: 7,
      name: "University of Edinburgh",
      ranking: 27,
      description: "The University of Edinburgh, one of the best business universities in the UK, was founded in 1583. With 35,000 students and 20 Nobel laureates, it attracts students worldwide. Set in Scotland's historic capital, it offers a rich academic experience.",
      courses: [
        { name: "MA Business Management", fees: "INR 30.5L (£28K)" },
        { name: "Full-time MBA", fees: "INR 47.3L (£43.3K)" },
        { name: "Masters in Management", fees: "INR 36L (£33.1K)" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 7 },
        { test: "TOEFL", score: 100 }
      ],
      notableAlumni: [
        { name: "Alan Turing", description: "Mathematician, Computer Scientist" },
        { name: "Sir Walter Scott", description: "Novelist, Poet" }
      ]
    },
    {
      id: 8,
      name: "King's College London",
      ranking: 40,
      description: "King's College London (KCL), one of the best business universities in the UK, was founded in 1829. With over 27,000 students from 150 countries and 12 Nobel Prize winners, KCL offers solid global connections and a prime location in central London, making it a top choice for ambitious students.",
      courses: [
        { name: "International Management BSc", fees: "INR 39L (£35.8K)" },
        { name: "International Management MSc", fees: "INR 41.2L (£37.8K)" },
        { name: "Executive MBA", fees: "INR 59L (£54.3K) full fees" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 7.5 },
        { test: "TOEFL", score: 100 }
      ],
      notableAlumni: [
        { name: "Charles Rennie Mackintosh", description: "Architect, Designer" },
        { name: "Sir David Attenborough", description: "Broadcaster, Natural Historian" }
      ]
    },
    {
      id: 9,
      name: "University of Nottingham",
      description: "The University of Nottingham, founded in 1881, is one of the top business schools in the UK and has over 40,000 students from 150 countries. Known for innovation, it was the first UK university to establish campuses in Malaysia and China. With five faculties, it has produced Nobel laureates, politicians, and Olympic gold medalists, offering a dynamic academic experience.",
      courses: [
        { name: "International Management BSc", fees: "INR 10L (£9.2K)" },
        { name: "International Business MSc", fees: "INR 35.3L (£32.4K)" },
        { name: "MBA", fees: "INR 35.3L (£32.4K)" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 6 },
        { test: "TOEFL", score: 80 }
      ],
      notableAlumni: [
        { name: "D.H. Lawrence", description: "Novelist, Poet" },
        { name: "Brian Cox", description: "Physicist, Television Presenter" }
      ]
    },
    {
      id: 10,
      name: "University of Reading",
      description: "The University of Reading, founded in 1892 and home to 17,000 students from over 150 countries, is recognised as one of the top business schools in the UK. Its Henley Business School is triple-accredited and ranked among the top 50 globally. With beautiful campuses and a solid global presence, Reading offers a dynamic academic experience.",
      courses: [
        { name: "BSc International Business and Management", fees: "INR 27.5L (£25.2K)" },
        { name: "Masters in Management", fees: "INR 31.1L (£28.5K)" },
        { name: "Executive MBA", fees: "INR 43.2L (£39.6K)" }
      ],
      englishRequirements: [
        { test: "IELTS", score: 7 },
        { test: "TOEFL", score: 100 }
      ],
      notableAlumni: [
        { name: "Ken Follett", description: "Author" },
        { name: "Kate Adie", description: "Journalist, Author" }
      ]
    }
  ];
  
  

export default function BachelorsUniversitiesList() {
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
        Top 10 Universities in UK for Bachelors
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
          color: "#546e7a",
          
        }}
      >
        The UK is home to some of the best universities in the world, with
        nearly 90 of them ranked in the QS World University Rankings 2025. These
        top institutions are known for their academic excellence and the diverse
        range of Bachelors programs they offer. Here is an overview of the top 10
        universities in the UK for Bachelors.
      </Typography>

        
    <Grid container spacing={4} px={4} py={4}>
      {universities.map((university) => (
        <Grid item xs={12} md={6} key={university.id}>
          <Box sx={{ height: '100%' }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                mb: 3,
                color: '#000',
              }}
            >
              {university.id}. {university.name}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.primary',
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              {university.description}
            </Typography>

            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 600,
                mb: 2,
                mt: 4,
              }}
            >
              Top Courses
            </Typography>

            <TableContainer
              component={Paper}
              sx={{
                mb: 4,
                '& .MuiTableCell-root': {
                  borderColor: '#e0e0e0',
                  py: 2,
                  px: 3,
                },
              }}
            >
              <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Course Name</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Annual Fees</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {university.courses.map((course) => (
                    <TableRow key={course.name}>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.fees}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 600,
                mb: 2,
              }}
            >
              English Requirements
            </Typography>

            <TableContainer
              component={Paper}
              sx={{
                mb: 4,
                '& .MuiTableCell-root': {
                  borderColor: '#e0e0e0',
                  py: 2,
                  px: 3,
                },
              }}
            >
              <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Test</TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {university.englishRequirements.map((requirement) => (
                    <TableRow key={requirement.test}>
                      <TableCell>{requirement.test}</TableCell>
                      <TableCell>{requirement.score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Notable Alumni
            </Typography>

            <Box component="ul" sx={{ pl: 4, mt: 2 }}>
              {university.notableAlumni.map((alumni) => (
                <Typography
                  key={alumni.name}
                  component="li"
                  sx={{
                    mb: 1,
                    color: 'text.primary',
                  }}
                >
                  {alumni.name}: {alumni.description}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
    </>
  
  );
}
