import React from 'react';
import styled, { css } from 'styled-components';

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

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`;

export default Button;
