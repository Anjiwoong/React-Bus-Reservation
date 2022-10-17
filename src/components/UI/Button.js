import React from 'react';
import styled from 'styled-components';

const Button = props => {
  return <ButtonWrap {...props}>{props.children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  border: none;

  svg {
    font-size: ${props => props.size};
  }
`;

export default Button;
