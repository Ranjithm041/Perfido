import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';

const PasswordInput = ({ value, onChange, showPassword, handleClickShowPassword, error, placeholder }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0.5, gap: '5px', }}>
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
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
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
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                sx={{ color: '#596773' }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
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
            width: '75%',
          }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default PasswordInput;