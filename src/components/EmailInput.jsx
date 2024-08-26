import React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';

const EmailInput = ({ value, onChange, error }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0 }}>
      <FormControl
        sx={{
          m: 1,
          width: { xs: '100%', sm: '300px' },
          maxWidth: '100%',
        }}
        variant="outlined"
        error={!!error}
      >
        <OutlinedInput
          id="outlined-adornment-email"
          type="email"
          placeholder="Enter Email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          sx={{
            height: '40px',
            backgroundColor: '#161A1D',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? 'red' : '#1D2125',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? 'red' : '#1D2125',
            },
            '&.Mui-focused': {
              backgroundColor: '#012931',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: error ? 'red' : '#07838F',
              },
            },
            '&::placeholder': {
              color: '#596773',
            },
            '& input': {
              color: '#FFFFFF',
              fontSize: { xs: '14px', sm: '16px' },
            },
            padding: '0 14px',
          }}
          endAdornment={
            <InputAdornment position="end">
              <EmailIcon sx={{ color: '#596773' }} />
            </InputAdornment>
          }
        />
      </FormControl>
      {error && (
        <Typography
          sx={{
            color: 'red',
            fontSize: '12px',
            mt: 0,
          }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default EmailInput;
