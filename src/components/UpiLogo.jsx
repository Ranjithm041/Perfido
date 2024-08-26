import React from 'react'
import { Box } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UpiLogo = (props) => {
    const handlePayment = () => {
        const upiLink = 'upi://pay?pa=mranjith901@oksbi&pn=Ranjith%20M&am=100&tn=Payment%20for%20services';
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
        if (isMobile) {
          // On mobile, open the UPI link directly
          window.location.href = upiLink;
        } else {
          // On desktop, show a message or redirect to a Google Pay web interface
          window.open('https://pay.google.com/', '_blank');
          alert('Please complete the payment using Google Pay on your mobile device.');
        }
      };
  return (
   <Container>

     <StyledLogo width={props.width} align={props.align} onClick={handlePayment} >
      <StyledImg src={props.src} alt={props.alt} />
      {props.src2 &&
       <StyledImg src={props.src2} alt={props.alt2} />
      }
     
    </StyledLogo>
   
   </Container>
  )
}
const StyledImg = styled.img`
  width: 80px;
  height: auto;

`;
const Container = styled(Box)`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`;
const StyledLogo = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: ${(props)=> props.align ||"space-around "} ;
    /* border:2px solid red; */
    border-radius: 5px;
    cursor: pointer;
    height:10vh;
    background-color: #161a1d;
    width: ${(props) => props.width || '100%'};
`;

export default UpiLogo
