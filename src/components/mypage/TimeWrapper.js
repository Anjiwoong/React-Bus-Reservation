import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const TimeWrapper = props => {
  return (
    <Wrapper>
      <div>
        <span>2022-10-10</span>
        <span>08:40</span>
        <span>일반</span>
      </div>
      <CancelButton>예매취소</CancelButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.primaryColor};
  width: 100%;
  height: 70px;
  margin: 0 auto;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.size.text};
    font-weight: bold;
    margin-left: 30px;
  }
`;

const CancelButton = styled(Button)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.size.small};
  margin-right: 30px;
  border: none;
  background: ${({ theme }) => theme.color.primaryColor};
`;

export default TimeWrapper;
