import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import PerfidoLogo from '../Assets/logo.png';
import { useNavigate,useLocation } from 'react-router-dom';

const Global = styled.div`
  *, *::before, *::after {
    box-sizing: border-box; 
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
  }
`;

const Screen = styled(Box)`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #101214;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Ubuntu' !important;
  overflow: hidden;  
`;

const Content = styled(Box)`
  width: 70vw !important;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 60vw !important;
  }

  @media (max-width: 900px) {
    width: 50vw !important;
  }

  @media (max-width: 600px) {
    width: 40vw !important;
    font-size: 0.9em; /* Reduce font size slightly */
    padding: 15px;    /* Adjust padding */
  }

  @media (max-width: 400px) {
    width: 30vw !important;
    font-size: 0.8em; /* Further reduce font size */
    padding: 10px;    /* Adjust padding */
  }
`;


const TopSection = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const TopLogo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    width: 100px;
  }

  @media (max-width: 600px) {
    width: 80px;
  }

  @media (max-width: 400px) {
    width: 60px;
  }
`;


const Heading = styled(Typography)`
  color: white;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Ubuntu' !important;

  @media (max-width: 900px) {
    font-size: 24px !important;
  }

  @media (max-width: 600px) {
    font-size: 20px  !important;
  }

  @media (max-width: 400px) {
    font-size: 16px  !important;
  }
`;


const Card = styled(Box)`
  background-color: #101214 !important;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  border: 1px solid #1d2125 !important;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #161A1D !important;
  }

  
  @media (max-width: 1000px) {
    & > .features {
      display: none;
    }
  }
`;

const PlanTitle = styled(Typography).attrs({
  className: 'plan-title',
})`
  font-size: 20px !important;
  font-weight: 500 !important;
  color: #00ceac;
  margin-bottom: 20px;
  text-align: left;
  font-family: 'Ubuntu' !important;
   @media (max-width: 900px) {
    font-size: 20px !important;
  }

  @media (max-width: 600px) {
    font-size: 16px  !important;
  }

  @media (max-width: 400px) {
    font-size: 12px  !important;
  }
`;

const PriceContainer = styled.div.attrs({
  className: 'price-container',
})`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px; 
  
`;

const Price = styled(Typography)`
  font-size: 40px !important;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: left;
  font-family: 'Ubuntu' !important;

  @media (max-width: 900px) {
    font-size: 24px !important;
  }

  @media (max-width: 600px) {
    font-size: 20px  !important;
  }

  @media (max-width: 400px) {
    font-size: 16px  !important;
  }
`;


const PerMonth = styled.span`
  font-size: 20px; 
  color: #596773; 
  font-family: 'Ubuntu';
  @media (max-width: 1000px) {
    font-size: 17px !important;
  }

  @media (max-width: 600px) {
    font-size: 14px !important;
  }

  @media (max-width: 400px) {
    font-size: 10px !important;
  }
`;

const Feature = styled(Box)`
font-family: 'Ubuntu' ;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px !important;
  font-weight: 400;
  color: #596773;

  @media (max-width: 900px) {
    font-size: 13px !important;
  }

  @media (max-width: 600px) {
    font-size: 12px !important;
  }

  @media (max-width: 400px) {
    font-size: 11px !important;
  }

  & .MuiSvgIcon-root {
    font-size: 1rem !important;
    color:${({included })=>(included ? '#BDE986':'#8C9BAB')};
    @media (max-width: 900px) {
      font-size: 0.9rem !important;
    }

    @media (max-width: 600px) {
      font-size: 0.8rem !important;
    }

    @media (max-width: 400px) {
      font-size: 0.7rem !important;
    }
  }
`;


const PlanButton = styled(Button)`
  margin-top: 20px;
  background-color: #012931 !important;
  color: #00CEAC !important;
  width: 100%;
  font-size: 14px !important;
  font-weight: 700 !important;
  border-radius: 5px;
  font-family: 'Ubuntu' !important;
  text-transform: none !important;

  @media (max-width: 900px) {
    font-size: 13px !important;
  }

  @media (max-width: 600px) {
    font-size: 12px !important;
  }

  @media (max-width: 400px) {
    font-size: 11px !important;
  }

  &:hover {
    background-color: #00CEAC !important;
    color: #012931 !important;
  }
`;

const Pricing = () => {
  const location = useLocation();
  const buttonName=location.state?.buttonName || 'Sign Up' // for payment page
  const navigate = useNavigate();
  const handleClick = (planName,price) => {
   if(buttonName==='Select'){
    navigate('/payment',{state:{planName,price}});
    return;
   }
   navigate('/signup',{state:{planName,price}});
  };

  return (
    <>
      <Global />
      <Screen>
        <Content>
          <TopSection>
            <TopLogo src={PerfidoLogo} alt="logo" />
            <Heading variant="h4">Choose your Plan</Heading>
          </TopSection>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <PlanTitle>Guest</PlanTitle>
                <PriceContainer>
                  <Price>Free</Price>
                </PriceContainer>
                <Box className="features">
                  <Feature included={true}><CheckIcon />&nbsp;50 Virtual Users</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;1 Load Generator</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;20 mins Max Test Duration</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;1 Week Data Retention</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;Unlimited Debug Runs</Feature>
                  <Feature included={false}><CloseIcon />&nbsp;No APM Integrations</Feature>
                  <Feature included={false}><CloseIcon />&nbsp;No Baseline Comparison</Feature>
                  <Feature included={false}><CloseIcon />&nbsp;No Private IPs</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;Base Tier Support</Feature>
                </Box>
                <PlanButton onClick={() => handleClick('Guest','Free')}>{buttonName}</PlanButton>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <PlanTitle>Startup</PlanTitle>
                <PriceContainer>
                  <Price>$500</Price>
                  <PerMonth>/month</PerMonth>
                </PriceContainer>
                <Box className="features">
                  <Feature included={true}><CheckIcon />&nbsp;5000 Virtual Users</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;20 Load Generators</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;5 hours Max Test Duration</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;6 Months Data Retention</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;Unlimited Debug Runs</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;With APM Integrations</Feature>
                  <Feature included={false}><CloseIcon />&nbsp;No Baseline Comparison</Feature>
                  <Feature included={false}><CloseIcon />&nbsp;No Private IPs</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;Standard Tier Support</Feature>
                </Box>
                <PlanButton onClick={() => handleClick('Startup','$500/month')}>{buttonName}</PlanButton>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <PlanTitle>Enterprise</PlanTitle>
                <PriceContainer>
                  <Price>Flexible</Price>
                </PriceContainer>
                <Box className="features">
                  <Feature included={true}><CheckIcon />&nbsp;Unlimited Virtual Users</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;50 Load Generators</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;10+ hours Max Test Duration</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;Unlimited Data Retention</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;Unlimited Debug Runs</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;With APM Integrations</Feature>
                  <Feature included={false}><CloseIcon />&nbsp;No Baseline Comparison</Feature>
                  <Feature included={false}><CloseIcon />&nbsp;No Private IPs</Feature>
                  <Feature included={true}><CheckIcon />&nbsp;Pro Tier Support</Feature>
                </Box>
                <PlanButton onClick={() => handleClick('Enterprise','Flexible')}>{buttonName}</PlanButton>
              </Card>
            </Grid>
          </Grid>
        </Content>
      </Screen>
    </>
  );
}

export default Pricing;
