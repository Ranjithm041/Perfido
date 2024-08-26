import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <>
       <ButtonField maxwidth={props.maxWidth} onClick={props.onClick} type={props.type} back={props.backgroundcolor} color={props.color}>  {props.text} </ButtonField>
    </>
  )
}
const ButtonField = styled.button`
        width: ${({ maxwidth }) => maxwidth || '100%'}; /* Adjusts to the width of its parent container */
  /* Maximum width constraint */
  height: 40px;
      background-color: ${({ back }) => back || '#00CEAC'};
      border: none;
      color: ${({color})=> color ||"#101214"} ;
      font-family: Ubuntu;
font-size: 14px;
font-weight: 700;
line-height: 16.09px;
border-radius: 5px;
margin: 5px 0px;
@media (max-width: 600px) {
    width: 100%; /* Full width on smaller screens */
    max-width: 250px; /* Adjust max width for smaller screens */
    
  }

  @media (max-width: 400px) {
    max-width: 200px; 
    margin:auto;/* Further adjust for very small screens */
  }
`;
export default Button
