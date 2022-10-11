import React from 'react';
import styled from 'styled-components';

const Button = props => {
  return <ButtonWrap {...props}>{props.children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100px;
  border-radius: 15px;
  border: none;
  font-size: ${({ theme }) => theme.size.medium1};
`;

export default Button;
