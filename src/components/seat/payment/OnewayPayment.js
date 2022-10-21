import styled, { css } from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../UI/Button';

const OnewayPayment = props => {
  const isPremium = useSelector(state => state.ticket.premium);
  const selectStartSeatArr = useSelector(
    state => state.ticket.seat.start.selected
  );

  const charge = useSelector(state => state.ticket.charge);

  const PREMIUM_CHARGE = 3000;

  const startPayment = !isPremium
    ? charge * selectStartSeatArr.length
    : (charge + PREMIUM_CHARGE) * selectStartSeatArr.length;

  return (
    <PaymentDiv>
      <div>
        <p>결제금액</p>
        <span>{startPayment}원</span>
      </div>
      <SelectButton
        active={props.isActive}
        disabled={!props.isActive}
        onClick={props.confirmHandler}
      >
        선택완료
      </SelectButton>
    </PaymentDiv>
  );
};

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

  ${props =>
    props.active &&
    css`
      background: ${({ theme }) => theme.color.primaryColor};
    `}
`;

export default OnewayPayment;
