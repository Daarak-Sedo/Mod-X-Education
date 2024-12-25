'use client'
import { createTheme } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            height: '50px', // Set height of the TextField
          },
          
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: 'red', //requried symball
        },
      },
    },
  
  },
});

export default theme;

