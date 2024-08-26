import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#00CEAC', // Set your custom primary color
    },
    secondary: {
      main: '#8C9BAB', // Set your custom secondary color
    },
    background: {
      default: '#101214', // Set a custom background color
    },
  },
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
});

export default Theme;