import styled from "styled-components";
import React, { useState } from "react";
import { Typography, Box, FormControl } from '@mui/material';
import logo from '../Assets/logo.png';
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from '../components/MyButton';

import CompanyIcons from "../components/CompanyIcons";


const Login = () => {
  // const logos = [
  //   { source: MicrosoftLogo, alt: 'Microsoft', path: 'https://www.microsoft.com/en-us/microsoft-365/outlook/log-in' },
  //   { source: AppleLogo, alt: 'Apple', path: '/apple' },
  //   { source: GmailLogo, alt: 'Gmail', path: '/gmail' },
  //   { source: GitLogo, alt: 'Git', path: '/git' },
  // ];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const validatePassword = (value) => {
    let messages = [];

    if (value.length < 8) {
        messages.push('Password must be at least 8 characters long.');
    }
    if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
        messages.push('Include at least one uppercase/lowercase letter.');
    }
    if (!/\d/.test(value) || !/[@$!%*?&]/.test(value)) {
        messages.push('Include at least one digit and special character (e.g.,@,$).');
    }
   return messages.join('\n');
};

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    // Email validation
    if (id === 'email-id') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailPattern.test(value) ? '' : 'Please enter a valid email address.',
      }));
    }

    // Password validation 
    
    if (id === 'pwd') {
      const passwordMessage = validatePassword(value);
      setErrors((prevErrors)=>({
        ...prevErrors,
        password: passwordMessage
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  form submission 
    if (!errors.email && !errors.password) {
      console.log('Form submitted', formData);
      navigate('/dashboard  ')
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <Container>
      <Content>
        <FormControl component="form" onSubmit={handleSubmit}>
          <Box sx={{ margin: '0 auto 10px auto', display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt="perfido" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
          <Typography variant="h1" color='#ffffff' sx={{
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: '1.2',
            textAlign: 'center',
            marginBottom: '10px'
          }}>
            Welcome Back !
          </Typography>
          <Typography sx={{
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: '1.5',
            textAlign: 'center',
            color: '#A0B4CF',
            marginBottom: '10px'
          }}>
            Login to your account
          </Typography>

          <Input
            label="Email ID"
            placeholder="Enter your Email id"
            type="email"
            id="email-id"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

          <Input
            label="Password"
            placeholder="Enter your Password"
            type="password"
            id="pwd"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

          <Typography sx={{
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: '1.5',
            textAlign: 'center',
            color: '#ffffff',
           
            marginTop: '0px',
            marginBottom: '5px'
          }}>
            Forget Password ?
            <Link to="/reset-password" style={{ color: '#00CEAC', fontFamily: 'Ubuntu, sans-serif', fontSize: '0.875rem', marginLeft: '10px', fontWeight: 700, textDecoration: 'none' }}>
              Reset Password
            </Link>
          </Typography>

          <Button text="Login" type="submit" />

          <Typography sx={{
            fontFamily: 'Ubuntu, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: '1.5',
            textAlign: 'center',
            color: '#ffffff',
            marginTop: '5px',
            marginBottom: '0px'
          }}>
            Don’t have an account ?
            <Link to="/signup" style={{ color: '#00CEAC', fontFamily: 'Ubuntu, sans-serif', fontSize: '0.875rem', marginLeft: '10px', fontWeight: 700, textDecoration: 'none' }}>
              Sign up for Free
            </Link>
          </Typography>

         <CompanyIcons />
        </FormControl>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: #101214;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 350px;
  height: auto;
  background: #101214;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1001;

  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    border-width: 0.5px;
  }
`;
const ErrorMessage = styled.span`
   color: #e42e2e;
   font-family: 'Ubuntu', sans-serif;
   font-size: 0.75rem;
   line-height: 1.5;
   white-space: pre-line;
`;

export default Login;
