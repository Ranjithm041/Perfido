import React from 'react'
import styled from 'styled-components'
import rightCorner from '../Assets/right-corner.png'

const RightEllipseImage = () => {
  return  <RightEllipse src={rightCorner} alt="Right-Ellipse"/>
  
}
const RightEllipse = styled.img`
  overflow: hidden;
  position: absolute;
  top:0;
  right:0;
  width: 329px; /* Adjust the size as needed */
  height:329px; /* Maintain aspect ratio */
  z-index: 1000; 
  transition: width 0.3s ease, height 0.3s ease, top 0.3s ease, right 0.3s ease;

  @media (max-width: 1024px) {
    /* Styles for tablets */
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    /* Styles for mobile devices */
    width: 280px;
    height: 280px;
  }

  @media (max-width: 480px) {
    /* Styles for small mobile devices */
    width: 250px;
    height: 250px;
  }
`;


export default RightEllipseImage
