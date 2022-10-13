import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import styled from 'styled-components';
import Button from '../UI/Button';

const ConfirmButton = () => {
  return (
    <Wrapper>
      <span>예매 확인 및 취소</span>
      <BiChevronRight />
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 840px;
  height: 80px;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.primaryColor};
  font-size: ${({ theme }) => theme.size.text};
  color: ${({ theme }) => theme.color.white};

  svg {
    font-size: ${({ theme }) => theme.size.medium1};
  }
`;

export default ConfirmButton;
