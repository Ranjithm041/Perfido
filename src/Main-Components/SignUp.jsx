import React ,{useState}from 'react'
import styled from 'styled-components'
import { Box,Button, Typography,Grid,FormControl,FormControlLabel,Checkbox,Link } from '@mui/material';
import logo from '../Assets/logo.png'
import Input from '../components/Input';
 import MyButton from '../components/MyButton';
import CompanyIcons from '../components/CompanyIcons';
import {useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName:'',
    email: '',
    password: '',
    confirmPassword:''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirm_password:''
  });
  
  const navigate = useNavigate();
  const location = useLocation(); //Get passed state
  const {planName,price}=location.state || {planName:'Startup',price:'$500/month'}; //Default values
  const validatePassword = (value) => {
    let messages = [];

    if (value.length < 8 ) {
        messages.push('Password must be at least 8 characters long.');
    }
    if ((!/[A-Z]/.test(value)) || (!/[a-z]/.test(value))) {
        messages.push('Include at least one uppercase/lowercase letter.');
    }
    if (!/\d/.test(value) || !/[@$!%*?&]/.test(value)) {
        messages.push('Include at least one digit and special character (e.g.,@,$, %).');
    }
    return messages.join('\n');
};
const matchingPassword = (e) => {
  const confirmPassword = e.target.value;
  const currentPassword = formData.password;
  setFormData((prevData) => ({
    ...prevData,
    confirmPassword: confirmPassword,
  }));
  setErrors((prevErrors) => ({
    ...prevErrors,
    confirm_password: currentPassword !== confirmPassword ? 'Password does not match.' : '',
  }));
};
  
  const handleChange = (e) => {
    const { id, value } = e.target;

    //set fullname
     if (id==='full-name'){
      setFormData((prevData) => ({
        ...prevData,
        fullName: value,
      }));
     }
    // Email validation
    if (id === 'email-id') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormData((prevData) => ({
        ...prevData,
        email: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailPattern.test(value) ? '' : 'Please enter a valid email address.',
      }));
    }

    // Password validation 
    
    if (id === 'pwd') {
      const passwordMessage = validatePassword(value);
      setFormData((prevData) => ({
        ...prevData,
        password: value,
      }));
      setErrors((prevErrors)=>({
        ...prevErrors,
        password: passwordMessage
      }));
    }
    
  };
  const handleChangePlan =()=>{
    navigate('/pricing');
  }
  return (
    <Container>
      <Box
      sx={{
        width: { xs: '90%', sm: '80%', md: '40%', lg: '50%', xl: '40%' },
        height: { xs: 'auto', sm: 'auto', md: '90vh', lg: '90vh', xl: '120vh' },
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        gap: '0px',
        opacity: 1,
        bgcolor: '#101214',
        marginTop:'10px',
        zIndex:'1080'
      }}
    >

          {/* for logo */}
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
                     
                     {/* <span style={{ fontWeight:'500',
                      fontSize:'14px',
                      lineHeight:"16.09px",color:'#596773'}}>/month</span>  */}
                      
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
          component="form" 
          onSubmit={
            (e)=>{
                    e.preventDefault();
                  if(errors.confirm_password ==='' && errors.password===''&& errors.email===''){
                    if (formData.password === formData.confirmPassword) {
                      navigate('/payment')
                    }else{                    
                      document.getElementById('confirm-pwd').focus();
                    }
                  
                  }
                 
                  else {
                    if(errors.confirm_password !=='')
                    document.getElementById('confirm-pwd').focus();
                    else if(errors.password !== '')
                      document.getElementById('pwd').focus();
                    else if(errors.email !=='')
                      document.getElementById('email-id').focus();
                }
                }
            }>
          <Grid container spacing={0.5} sx={{ marginTop: '5px',padding:'0'}}>
      <Grid item xs={12}>
      <Typography
  sx={{
    fontFamily: 'Ubuntu',
    fontSize: { xs: '20px', sm: '24px' },
    fontWeight: 700,
    lineHeight: { xs: '24px', sm: '27.58px' },
    textAlign: { xs: 'center', sm: 'left' }, // Center for mobile, left for larger screens
    color: '#ffffff',
  }}
>
  Create a new Account
</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input 
        label="Full Name" 
        type="text"
        placeholder="Enter Your Name"
        id="full-name"
        value={formData.fullName}
        onChange={handleChange}
       
        />
        
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input 
        label="Email Id" 
        type="text" 
        placeholder="Enter Your Email Id"
        id="email-id"
        onChange={handleChange}
        />
         {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input 
        label="Password" 
        type="text" 
        placeholder="Enter Your Password"
        id="pwd"
        value={formData.password}
        onChange={handleChange}
        />
         {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      </Grid>
      <Grid item xs={12} sm={6}>
  <Input 
    label="Confirm Password" 
    type="password" 
    placeholder="Confirm your password"
    id="confirm-pwd"
    value={formData.confirm_password}
    onChange={matchingPassword}
  />
  {errors.confirm_password && (
    <ErrorMessage>{errors.confirm_password}</ErrorMessage>
  )}
</Grid>
      {/* checkbox */}
      <Grid item xs={12}>
      <FormControlLabel
    control={<Checkbox defaultChecked  sx={{ paddingRight: '4px' }} />}
    label={
      <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Typography sx={{ fontFamily: 'Ubuntu', fontSize: '14px', color: '#8C9BAB' }}>
          I agree to the{' '}
        </Typography>
        <Link href="/terms" target="_blank" sx={{ color: '#ffffff', textDecorationColor:'white' ,fontFamily: 'Ubuntu' }}>
          Terms and Conditions
        </Link>
      </Box>
    }
  />
    </Grid>
    <Grid item xs={6} sm={6}>
        <MyButton text="Cancel" type="reset" backgroundcolor='#2C333A' color='#ffffff'/>
      </Grid>
      <Grid item xs={6} sm={6}>
      <MyButton text="Sign Up"  />
      </Grid>
    </Grid>
    </FormControl>
    <CompanyIcons/>
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
export default SignUp
