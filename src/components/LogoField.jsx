import React from 'react'
import styled from 'styled-components'
import { Box } from '@mui/material'
const LogoField = (props) => {
  return (
   <>
       <LogoButton>
        <img src={props.source} alt={props.alt}/>
       </LogoButton>
   </>
  )
}

const LogoButton = styled(Box)`
display: flex;
align-items: center;
justify-content: center;
width: 53px;
height: 53px;
border-radius: 5px;
border: 0.5px solid #035663;
`;
export default LogoField
