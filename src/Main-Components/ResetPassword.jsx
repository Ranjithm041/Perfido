import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import MyButton from '../components/MyButton';
import logo from '../Assets/logo.png'

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (
      password.length < minLength ||
      !hasUpperCase ||
      !hasLowerCase ||
      !hasDigit ||
      !hasSpecialChar
    ) {
      setPasswordError(
        'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      navigate('/login');
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Whole>
      <ContentBox>
      <Box sx={{ margin: '0 auto 10px auto', display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt="perfido" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        <Typography
          fontFamily={'Ubuntu'}
          fontSize={{ xs: '28px', sm: '32px', md: '40px' }}
          fontWeight={'700'}
          color={'#FFFFFF'}
          textAlign='center'
        >
          Reset Password
        </Typography>
        <Typography
          fontFamily={'Ubuntu'}
          fontSize={{ xs: '14px', sm: '16px' }}
          fontWeight={'500'}
          color={'#A0B4CF'}
          textAlign='center'
        >
          Get your Password
        </Typography>

        <EmailInput value={email} onChange={setEmail} error={emailError} />
        <PasswordInput
          value={password}
          onChange={setPassword}
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          error={passwordError}
          placeholder="Enter new Password"
        />
        <PasswordInput
          value={confirmPassword}
          onChange={setConfirmPassword}
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          error={confirmPasswordError}
          placeholder="Confirm Password"
        />

        <MyButton onClick={handleSignUp} text="Sign Up" maxWidth="75%"/>
      </ContentBox>
    </Whole>
  );
};

const Whole = styled.div`
  height: 100vh;
  width: 100vw;
  background: #101214;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled(Box)`
  width: 90%;
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 600px;

  @media (max-width: 600px) {
    width: 95%;
    max-width: none;
    padding: 15px;
    gap: 10px;
    height: 300px;
  }
`;


export default ResetPassword;