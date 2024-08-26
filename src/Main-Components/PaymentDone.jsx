import React from 'react';
import styled, { keyframes } from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PaymentDone = () => {
  return (
    <Container>
      <AnimationWrapper>
        <CheckIcon />
      </AnimationWrapper>
      <Message>Payment Successful!</Message>
    </Container>
  );
};

const bounceIn = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
`;

const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #e0f7fa;
  border-radius: 50%;
  animation: ${bounceIn} 1s ease-in-out;
`;

const CheckIcon = styled(CheckCircleIcon)`
  font-size: 5rem !important;
  color: #00CEAC;
  
  animation: ${bounceIn} 1.2s ease-in-out;
`;

const Message = styled.h1`
  font-family: 'Inter', sans-serif;
  color: #00CEAC;
  margin-top: 20px;
  font-size: 2rem;
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export default PaymentDone;
