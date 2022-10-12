import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const SeatPayment = () => {
  return (
    <Wrapper>
      <PaymentDiv>
        <div>
          <p>결제금액</p>
          <span>0원</span>
        </div>
        <SelectButton>선택완료</SelectButton>
      </PaymentDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 110px;
  background: ${({ theme }) => theme.color.white};
  border-top: 2px solid ${({ theme }) => theme.color.primaryColor};
`;

const PaymentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 540px;
  height: 100%;
  margin: 0 auto;

  p {
    font-size: ${({ theme }) => theme.size.small};
  }

  span {
    font-size: ${({ theme }) => theme.size.medium2};
    font-weight: bold;
  }
`;

const SelectButton = styled(Button)`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.gray1};
  width: 276px;
  height: 60px;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.size.small};
`;

export default SeatPayment;
