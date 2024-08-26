import React from 'react'
import styled from 'styled-components'
import leftCorner from '../Assets/left-corner.png'

const LeftEllipseImage = () => {
  return  <RightEllipse src={leftCorner} alt="Left-Ellipse"/>
  
}
const RightEllipse = styled.img`
  overflow: hidden;
  position: absolute;
  bottom:0;
  left:0;
  width: 229px; /* Adjust the size as needed */
  height:229px; /* Maintain aspect ratio */
  z-index: 1000; 
  transition: width 0.3s ease, height 0.3s ease, top 0.3s ease, right 0.3s ease;

  @media (max-width: 1024px) {
    /* Styles for tablets */
    width: 200px;
    height: 200px;
  
  }

  @media (max-width: 768px) {
    /* Styles for mobile devices */
    width: 180px;
    
    height: 180px;
  }

  @media (max-width: 480px) {
    /* Styles for small mobile devices */
    width: 150px;
    height: 150px;
    
  }
`;


export default LeftEllipseImage
