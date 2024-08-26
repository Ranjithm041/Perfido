import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import rightCorner from '../Assets/right-corner.png'
import leftCorner from '../Assets/left-corner.png'
import EllipseLogo from '../Assets/Ellipse.png'
const LoadingPage = () => {
  const [dots, setDots] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ' '));
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/login');
    }, 8000); // Redirect after 3 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <Whole>
      <StyledImage src={rightCorner} alt='right corner' />
      <StyledImage1 src={leftCorner} alt='left corner' />
      <CenteredBox>
        <LogoImage src={EllipseLogo} alt='logo' />
        <StyledTypography variant="h1">Perfido</StyledTypography>
      </CenteredBox>
      <LoadingText>Loading {dots}</LoadingText>
      
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
  z-index: 1002;
  position: relative;
`;

const StyledImage = styled.img`
  width: 40vw;
  height: auto;
  position: absolute;
  right: 0;
  top: 0;
  max-width: 600px;
  max-height: 600px;

  @media (max-width: 1024px) {
    width: 45vw;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-width: 400px;
  }

  @media (max-width: 600px) {
    width: 65%;
    max-width: 350px;
  }
`;

const StyledImage1 = styled.img`
  width: 30vw;
  height: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 450px;
  max-height: 450px;

  @media (max-width: 1024px) {
    width: 35vw;
    max-width: 350px;
  }

  @media (max-width: 768px) {
    width: 40vw;
    max-width: 300px;
  }

  @media (max-width: 600px) {
    width: 45vw;
    max-width: 275px;
  }
`;

const CenteredBox = styled(Box)`
  height: auto;
  width: auto;
  max-width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 768px) {
    max-width: 80vw;
    gap: 15px;
  }

  @media (max-width: 600px) {
    max-width: 70vw;
    gap: 15px;
  }
`;

const LogoImage = styled.img`
  height: 70.2px;
  width: 70.2px;

  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }

  @media (max-width: 600px) {
    height: 40px;
    width: 40px;
  }
`;

const StyledTypography = styled(Typography)`
  && {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 63.41px;
    font-style: italic;
    font-weight: 700;
    line-height: 79.9px;
    text-align: left;
    color: #FFFFFF;

    @media (max-width: 768px) {
      font-size: 48px;
      line-height: 56px;
    }

    @media (max-width: 600px) {
      font-size: 36px;
      line-height: 42px;
    }
  }
`;

const LoadingText = styled(Typography)`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.38px;
  color: white;
  position: absolute;
  top: calc(50% + 60px + 10px);
  left: 50%;
  width: 100px;
  transform: translateX(-50%);
  text-align: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 12px;
    width: 80px;
  }

  @media (max-width: 600px) {
    font-size: 8px;
    line-height: 10px;
    top: calc(50% + 50px);
    width: 60px;
  }
`;

export default LoadingPage;
