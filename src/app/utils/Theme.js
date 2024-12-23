'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    text: {
      primary: '#000000', // Default text color
      secondary: '#000000', // Secondary text color (black)  // #ffffff
      disabled: '#9e9e9e', // Disabled text color
    },
  },
});

export default theme;

