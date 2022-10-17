import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const Input = forwardRef((props, ref) => {
  return <InputWrap {...props} ref={ref} />;
});

const InputWrap = styled.input`
  width: 100%;
  height: 100px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.color.primaryColor};
  text-indent: 30px;
  margin-bottom: 26px;
  font-size: ${({ theme }) => theme.size.text};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray2};
  }

  ${prop =>
    prop.modal &&
    css`
      padding: 0 50px 0 20px;
      height: 60px;
      border: none;
      background: ${({ theme }) => theme.color.bgColor};
      border-radius: 10px;
      text-indent: 0;
      margin-bottom: 15px;

      &::placeholder {
        font-size: ${({ theme }) => theme.size.small};
      }

      &:focus {
        border: 1px solid ${({ theme }) => theme.color.primaryColor};
        outline: none;
      }
    `}
`;

export default Input;
