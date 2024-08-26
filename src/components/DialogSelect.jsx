import  React,{useState} from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {Link, useNavigate} from "react-router-dom";

export default function DialogSelect() {
  const [open, setOpen] = useState(false);
   const [bankdata, setBankData] = useState([
    { name: "Punjab National Bank (PNB)", url: "https://www.pnbindia.in/" },
    { name: "Bank of Baroda", url: "https://www.bobibanking.com/" },
    { name: "Union Bank of India", url: "https://www.unionbankofindia.co.in/" },
    { name: "Indian Bank", url: "https://www.indianbank.net.in/" },
    { name: "Bank of India", url: "https://www.bankofindia.co.in/" },
    { name: "Central Bank of India", url: "https://www.centralbankofindia.co.in/" },
    { name: "IDFC First Bank", url: "https://www.idfcfirstbank.com/netbanking.html" },
    { name: "Yes Bank", url: "https://www.yesbank.in/" },
    { name: "UCO Bank", url: "https://www.ucobank.com/" },
    { name: "Indian Overseas Bank", url: "https://www.iob.in/" },
  ]);
const [selectedBank,setSelectedBank]=useState('');
const [bankUrl,setBankUrl]=useState(''); 
  const handleChange = (e) => {
    setSelectedBank(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      bankdata.forEach((bank)=> {
       if(bank.name===selectedBank){
        setBankUrl(bank.url);
       }
       
    });
      setOpen(false);
    }
  };

  return (
    <div>
      <StyledButton onClick={()=>{handleClickOpen()}} 
      sx={{backgroundColor:'#00CEAC', color:'black'}} 
      
      >Choose other Bank</StyledButton>
     <StyledDialog disableEscapeKeyDown open={open} onClose={handleClose}>
      <DialogTitle>Fill the form</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: "flex", flexWrap: "wrap", }}>
          <FormControl sx={{ m: 4, maWidth: "100%" }}>
            <InputLabel htmlFor="dialog-native">Select your Bank</InputLabel>
            <StyledSelect
             
              native
              value={selectedBank}
              onChange={handleChange}
              input={<OutlinedInput label="Select your Bank" id="dialog-native" />}
            >
               <StyledOption aria-label="None" value="" />
              {bankdata.map((bank,index)=>(
                <StyledOption value={bank.name} key={index}>
                  {bank.name}
                </StyledOption>
              ))}
            </StyledSelect>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button type="reset" onClick={handleClose}>Cancel</Button>
        <Link to={bankUrl===""? '' : bankUrl} target={bankUrl===''? '_self':'_blank'}> 
        <Button onClick={handleClose}>
          Ok
        </Button>
        </Link>
       
      </DialogActions>
    </StyledDialog>
    </div>
  );
}
const StyledOption = styled.option`
background-color: black !important;
color: white !important;

`;
const StyledSelect = styled(Select)`
  width: 100%; // Ensure it takes full width of its container
  .MuiSelect-select {
    padding: 10px; // Adjust padding to fit within mobile screens
  }
`;
const StyledDialog = styled(Dialog)`
 .MuiDialogTitle-root {
    background-color: #161a1d;
    color: #fff;
  }
  .MuiDialogContent-root {
    background-color: #161a1d;
  }
  .MuiDialogActions-root {
    background-color: #161a1d;
  }
  
  .MuiInputLabel-root {
    color: #ffffff;
  }
  .MuiOutlinedInput-root {
    color: #fff5f5;
  
  }
`;

const StyledButton = styled(Button)`
width: 100%;
margin-top: 10px !important;
font-family: 'Ubuntu, sans-serif' !important;
text-transform: none !important;
font-size:1.2rem !important;
&:hover {
    background-color: #c0ccda !important; /* Color on hover */
  }
`;