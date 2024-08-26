import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PaymentLogo = (props) => {
  return (
    <StyledLink to= {props.path} target='_blank' >
    <LogoButton width={props.width}>
      <img src={props.src} id={props.id} alt={props.label} /> <br />
      <Label htmlFor={props.id}>{props.label}</Label>
    </LogoButton>
    </StyledLink>
  );
};
const StyledLink =styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;
const LogoButton = styled(Box)`
  width: ${(props) => props.width || '100%'};
  display: flex;

  flex-direction: column;
  align-items: center;
  height:70px;
  justify-content: center;
  padding: 8px;
  /* border: 1px solid #333; */
  border-radius: 8px;
  /* background-color: #161A1D; Dark background */
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  img {
    max-width: 70%;
    height: 43px;
 /* Reduced gap between image and label */

    /* Adjust image size for mobile */
    @media (max-width: 600px) {
      max-width: 50%;
      margin-bottom: 3px;
    }
  }

  /* Adjust padding and text size for mobile */
  @media (max-width: 600px) {
    padding: 6px;
  }
`;

const Label = styled.label`
  color: #fff; /* White text color */
  font-size: 0.9rem;
  text-align: center;
  font-family: 'Ubuntu, sans-serif';
  letter-spacing: 0.08rem ;
  /* Adjust font size for mobile */
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export default PaymentLogo;
