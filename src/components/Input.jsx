import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import card_logo from '../Assets/card_logo.png'
const Input = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault(); // Prevents form submission
    setIsPasswordVisible((prevState) => !prevState);
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <>
      <Label htmlFor={props.id}>{props.label}</Label>
      <InputWrapper>
        <InputField
           type={
            props.type === 'password' && !isPasswordVisible
              ? 'password'
              : props.type === 'password'
              ? 'text'
              : props.type
          }
          placeholder={props.placeholder}
          id={props.id}
          onChange={props.onChange}
          maxLength={props.maxLength}
          minLength={props.minLength}
          required
        />
        {props.type === 'password' && (
          <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
            <IconWrapper animate={isPasswordVisible ? "true" : undefined}>
              {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconWrapper>
          </TogglePasswordButton>
        )}
        {props.type === 'card' && (
          <TogglePasswordButton type="button" >
            <IconWrapper >
             <img src={card_logo} alt="" />
            </IconWrapper>
          </TogglePasswordButton>
        )}
      </InputWrapper>
    </>
  );
};

const Label = styled.label`
  color: #8c9bab;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Ubuntu';
  line-height: 13.79px;
  justify-content: left;
  margin-right: 0px;
  margin-bottom: 15px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: '100%' ;
  max-width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  background: #161a1d;
  outline: none;
  font-family: 'Ubuntu';
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.09px;
  color: #ffffff;
   
  &:focus {
    border: 1px solid #07838F;
  }

  &::placeholder {
    color: #596773;
  }
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8c9bab;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 1;
  &:focus {
    outline: none;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  animation: ${({ animate }) => (animate ? pulse : 'none')} 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
`;

export default Input;
