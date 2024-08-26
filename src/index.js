import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import Theme from './components/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={Theme}>
<App/>
</ThemeProvider>
  </React.StrictMode>
  

    

);


