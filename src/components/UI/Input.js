import React from 'react';
import styled from 'styled-components';

const Input = props => {
  return <InputWrap {...props} />;
};

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
`;

export default Input;
