import React ,{useState} from 'react'
import styled from 'styled-components';

import { Box ,Typography,Button, Radio,Grid,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Checkbox,
    Divider
    } from '@mui/material';
import logo from '../Assets/logo.png'
import {useLocation, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import MyButton from '../components/MyButton'
import PaymentLogo from '../components/PaymentLogo';
import canara_bank_logo from '../Assets/canarabanklogo.png'
import hdfc_bank_logo from '../Assets/hdfcbanklogo.png'
import axis_bank_logo from '../Assets/axisbanklogo.png'
import sbi_bank_logo from '../Assets/sbibanklogo.png'
import icici_bank_logo from '../Assets/icicibanklogo.png'
import kotak_bank_logo from '../Assets/kotakbanklogo.png'
import DialogSelect from '../components/DialogSelect';
import upi_logo from '../Assets/upilogo.png';
import gpay_logo from '../Assets/gpaylogo.png';
import phonepe_logo from '../Assets/phonepelogo.png';
import rupay_logo from '../Assets/rupaylogo.png'
import UpiLogo from '../components/UpiLogo';
import paytm_logo from '../Assets/paytmlogo.png'
import paypal_logo from '../Assets/paypallogo.png'
const Payment = () => {
    const [bankLogo,setBankLogo] = useState([
        {
            path: "https://canarabank.com/net-banking",
            src: canara_bank_logo,
            label: "Canara Bank"
          },
          {
            path: "https://www.sbi.co.in/web/personal-banking/accounts/saving-account/savings-bank-account",
            src: sbi_bank_logo,
            label: "SBI Bank"
          },
          {
            path: "https://netbanking.hdfcbank.com/netbanking/",
            src: hdfc_bank_logo,
            label: "HDFC Bank"
          },
          {
            path: "https://retail.axisbank.co.in/",
            src: axis_bank_logo,
            label: "Axis Bank"
          },
          {
            path: "https://www.kotak.com/en/net-banking.html",
            src: kotak_bank_logo,
            label: "Kotak Mahindra"
          },
          {
            path: "https://www.icicibank.com/Personal-Banking/insta-banking/internet-banking/index.page",
            src: icici_bank_logo,
            label: "ICICI Bank"
          }
    ])
    const navigate = useNavigate();
  const location = useLocation(); //Get passed state
  const {planName,price}=location.state || {planName:'Startup',price:'$500/month'}; //Default values
  const buttonName="Select";
 
  const [selectedValue, setSelectedValue] = useState('card');
  const handleChangePlan =()=>{
    navigate('/pricing',{state:{buttonName}}); 
    
  }
  
  const [formData, setFormData]=useState({
    cardNumber :'',
    expiryDate :'',
    cvvNumber:''
  });
     const [errors, setErrors]=useState({
        cardError:'',
        expiryDate:'',
        cvv:''
     });
  const handleChange = (e) => {
    const { id, value } = e.target;
  
    
    //card validation
    if (id === 'card') {
      const numericValue = value.replace(/\D/g, '');
      const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, '$1-');
      e.target.value = formattedValue;
         setFormData((prevData)=>({
            ...prevData,
            cardNumber: numericValue
         }))
        setErrors((prevErrors)=>({
            ...prevErrors,
            cardError:(numericValue).length <16 ? "Enter valid card number": ''
        }));  
    }
    if(id==='expiry-date'){
        const numericValue = value.replace(/\D/g, '');
        const formattedValue = numericValue.replace(/(\d{2})(?=\d)/g, '$1/');
        e.target.value=formattedValue;
        setFormData((prevData)=>({
            ...prevData,
            expiryDate: numericValue
         }))
         
        setErrors((prevErrors)=>({
            ...prevErrors,
            expiryDate:(numericValue).length <4 ? "Enter valid Expiry Date": ''
        }));  
    }
    if(id==='cvv'){
        const numericValue = value.replace(/\D/g, '');
        e.target.value = numericValue;
        setFormData((prevData)=>({
            ...prevData,
            cvvNumber: numericValue
         }))
        setErrors((prevErrors)=>({
            ...prevErrors,
            cvv:(numericValue).length <3 ? "Enter valid cvv number": ''
        }));  
    } 
    if (value==='card'||value==='upi'|| value==='net_banking'||value==='paypal') {
         setSelectedValue(value);
    }
  };
  return (
    <Container>
      <Box
      sx={{
        width: { xs: '90%', sm: '80%', md: '30%', lg: '40%', xl: '50%' },
        height: { xs: 'auto', sm: 'auto', md: '90vh', lg: '90vh', xl: '120vh' },
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        gap: '0px',
        opacity: 1,
        bgcolor: '#101214',
        marginTop:'10px',
        zIndex:'1080',
        
      }}
    >
       {/* logo */}
       <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>  
          <img src={logo} alt="perfido" style={{ maxWidth: '100%', height: 'auto' ,marginBottom:'10px'}} />
       </Box>
           {/* plan changing box */}
           <Box sx={{
            display:'flex',
            width:'100%',
            border:'1px solid #00CEAC',
            backgroundColor:'#001317',
            borderRadius:'10px',
            height:'80px',
            alignItems:'center',
            justifyContent:'space-between'
            }}>
                  <Box>
                     <Typography variant="h6" color="primary"
                     sx={{
                      fontWeight:'500',
                      fontSize:'16px',
                      lineHeight:"18.38px",
                      marginLeft:'20px',
                      marginTop:'0px'
                     }}
                     >{planName}</Typography>
                     <Typography variant="h6" color="#ffffff"
                     sx={{
                      fontWeight:'500',
                      fontSize:'24px',
                      lineHeight:"27.58px",
                      marginLeft:'20px',
                      marginTop:'5px'
                     }}
                     > {price}
                     
                     
                      
                      </Typography>
                     
                  </Box>
                  <Box>
                  <Button variant="contained" sx={{
                    background:'#012931',
                    color:'#ffffff',
                    textTransform: 'none',
                    alignItems:'center',
                    marginRight:'20px'
                  }}
                  onClick={handleChangePlan}
                  >Change Plan</Button>
                  </Box>
          </Box>   
              <FormControl 
              component='form' 
              onSubmit={
                (e)=>{
                      e.preventDefault();
                      if(errors.cardError ==='' && errors.cvv===''&& errors.expiryDate===''){
                          navigate('/payment-done')
                      }
                      else {
                        if(errors.cardError !==''){
                        document.getElementById('card').focus();
                        }
                        else if(errors.cvv !== '')
                          document.getElementById('cvv').focus();
                        else if(errors.expiryDate !=='')
                          document.getElementById('expiry-date').focus();
                    }
                    }
                }
              >
                  <Typography id="payment"
                      sx={{
                          fontFamily: 'Ubuntu',
                          fontSize: '24px',
                          fontWeight: 700,
                          lineHeight: '27.58px',
                          textAlign: 'left',
                          color: '#ffffff',
                          marginTop: '10px'
                      }}
                  >
                      Payment
                  </Typography>
                  <RadioGroup
                      row
                      aria-labelledby="radio-buttons-group"
                      defaultValue="card"
                      name="radio-buttons-group"
                      onChange={handleChange}
                      sx={{
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: {
                              xs: 'flex-start',
                              sm: 'center',
                          },
                          gap: {
                              xs: '10px',
                              sm: '30px',
                              md: '50px',
                          },
                          flexWrap: 'wrap',
                      }}
                  >
                      <FormControlLabel value="card" id='credit-card' control={<Radio />} label="Card" />
                      <FormControlLabel value="net_banking" id='net-banking' control={<Radio />} label="Net Banking" />
                      <FormControlLabel value="upi" id='upi' control={<Radio />} label="UPI" />
                      <FormControlLabel value="paypal" id='paypal' control={<Radio />} label="Paypal" />
                  </RadioGroup>
                  {selectedValue === 'card' && 
                  <Grid container spacing={1} sx={{ marginTop: '5px', padding: '0' }}>
                      <Grid item xs={12}>
                          <Input 
                          label="Card Number" 
                          type="card" 
                          id='card'
                          placeholder="Enter your card number" 
                          maxLength='19'
                          minLength='19'
                          onChange={handleChange}
                          />
                          {errors.cardError && <ErrorMessage>{errors.cardError}</ErrorMessage>}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <Input 
                          label="Expiration Date" 
                          type="text" 
                          placeholder="MM/YY" 
                          id = "expiry-date"
                          maxLength='5'
                          minLength='5'
                          onChange={handleChange}
                          />
                          {errors.expiryDate && <ErrorMessage>{errors.expiryDate}</ErrorMessage>}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <Input 
                          label="CVV" 
                          type="password" 
                          placeholder="Enter your cvv number" 
                          id="cvv"
                          maxLength='3'
                          minLength='3'
                          onChange={handleChange}
                          />
                          {errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
                      </Grid>
                      <Grid item xs={12}>
                          <FormControlLabel
                              control={<Checkbox defaultChecked sx={{ paddingRight: '4px' }} />}
                              label={
                                  <Box component="span">
                                      <Typography sx={{ fontFamily: 'Ubuntu', fontSize: '14px', color: '#8C9BAB' }}>
                                         Save Card Details
                                      </Typography>
                                  </Box>
                              }
                          />
                      </Grid>
                      <Grid item xs={6} sm={6}>
                          <MyButton text="Cancel" type="reset" backgroundcolor='#2C333A' color='#ffffff' />
                      </Grid>
                      <Grid item xs={6} sm={6}>
                          <MyButton text={`Pay  ${price  !=='$500/month' ? price: '$500'}`} />
                      </Grid>
                      <Grid item xs={12}>
                          <Typography
                              sx={{
                                  fontFamily: 'Inter',
                                  fontSize: '12px',
                                  fontWeight: 400,
                                  lineHeight: '15px',
                                  textAlign: 'left',
                                  color: '#454F59',
                              }}
                          >
                              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                          </Typography>
                      </Grid>
                  </Grid>
                  }
                  {selectedValue ==='net_banking' &&
                  <Grid container spacing={1} sx={{ marginTop: '5px', padding: '0' }}>
                    {bankLogo.map((bank,index)=>(
                        <Grid item xs={4} sm={4}>
                            <PaymentLogo
                               width="90%"
                               path={bank.path}
                               src={bank.src}
                               label={bank.label}
                               key={index}
                               
                            />
                        </Grid>
                ))}
            
                   <Grid item xs={12} sm={12} sx={{display:'flex',
                        alignItem:"center",
                        justifyContent:'center',marginTop:'10px'}}>
                   <Divider component="div" role="presentation"
                    sx={{
                        width:'80%',
                        "&::before, &::after": {
                          borderColor: "gray",
                          borderWidth:'0.5px'
                        },
                      }}
                      >
  <Typography  sx={{fontFamily: 'Ubuntu, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: '1.5',
            textAlign: 'center',
            color:'#ffffff'}}>If you Don't have</Typography>
</Divider>
                   </Grid>
                   <Grid item xs={12} sm={12}><DialogSelect/></Grid>

                   <Grid item xs={12} sm={12}>
                   
                   <Typography
                              sx={{
                                  fontFamily: 'Inter',
                                  fontSize: '12px',
                                  marginTop:'15px',
                                  fontWeight: 400,
                                  lineHeight: '15px',
                                  textAlign: 'left',
                                  color: '#454F59',
                              }}
                          >
                            NetBanking allows you to make payments directly from your bank account with ease 
                            and security. Simply select your bank, log in with your credentials, and authorize
                             the transaction. Your payment will be processed instantly, ensuring a smooth and 
                             secure payment experience.
                          </Typography>
                   </Grid>
                  </Grid>
                 
                  }
                  {selectedValue==='upi' &&
                   <Grid container spacing={1}>
                   <Grid item xs={12} sm={12}>
                       <UpiLogo src={gpay_logo} src2={upi_logo} alt="pay with gpay" title="pay with gpay" />        
                       <UpiLogo src={phonepe_logo} src2={rupay_logo}  alt="pay with phonepe"/>  
                       <UpiLogo src={paytm_logo}   src2={upi_logo}  alt="pay with paytm" />
                   </Grid>
                   <Grid item xs={12} sm={12}>
                   
                   <Typography
                              sx={{
                                  fontFamily: 'Inter',
                                  fontSize: '12px',
                                  marginTop:'15px',
                                  fontWeight: 400,
                                  lineHeight: '15px',
                                  textAlign: 'left',
                                  color: '#454F59',
                              }}
                          >
                            UPI allows you to make payments instantly and securely using your mobile device. 
                            Simply enter the recipient's UPI ID, specify the amount, and authorize the 
                            transaction using your UPI PIN. Your payment is processed in real-time, ensuring 
                            a quick and hassle-free payment experience. UPI simplifies transactions by 
                            eliminating the need for bank account details, making it a convenient and reliable
                             method for transferring money.


                          </Typography>
                   </Grid>
                   </Grid>
                  }
                  {selectedValue==='paypal' && 
                  <Grid container spacing={2}>

                    <Grid item xs={12} sm={12} sx={{
                      marginTop:'60px',
                     

                    }}>
                     
                      <UpiLogo src={paypal_logo}  width='50%' alt="paypal" title='pay with paypal' />
              
                    </Grid>
                    <Grid item xs={12} sm={12}>
                   
                   <Typography
                              sx={{
                                  fontFamily: 'Inter',
                                  fontSize: '12px',
                                  marginTop:'30px',
                                  fontWeight: 400,
                                  lineHeight: '15px',
                                  textAlign: 'left',
                                  color: '#454F59',
                              }}
                          >
                            PayPal allows you to send money securely and quickly using your email or mobile number. Simply log in to your PayPal account, enter the recipient's email address, specify the amount, and confirm the transaction. Your payment is processed instantly, offering a seamless experience with real-time notifications. PayPal streamlines payments by eliminating the need for sharing sensitive financial information, making it a trusted and convenient method for both personal and business transactions

                          </Typography>
                   </Grid>
                  </Grid>
                  }
        
              </FormControl>
    </Box>
   
    </Container>
  )
}

const Container = styled.div`
margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: #101214;
  
`;
const ErrorMessage = styled.span`
   color: #e42e2e;
   font-family: 'Ubuntu', sans-serif;
   font-size: 0.75rem;
   line-height: 1.5;
   white-space: pre-line;
`;
export default Payment
