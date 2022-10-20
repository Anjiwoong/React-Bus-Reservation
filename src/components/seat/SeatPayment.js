import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../UI/Button';
import DateContext from '../../store/date-context';
import { ticketActions } from '../../store/ticket-slice';

const SeatPayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateCtx = useContext(DateContext);
  const selectStartSeatArr = useSelector(
    state => state.ticket.seat.start.selected
  );
  const isPremium = useSelector(state => state.ticket.premium);

  const selectArrivalSeatArr = useSelector(
    state => state.ticket.seat.arrival.selected
  );

  const arrivalRemainSeat = useSelector(
    state => state.ticket.seat.arrival.remain
  );

  const PREMIUM_CHARGE = 3000;

  const charge = useSelector(state => state.ticket.charge);

  const isOneway = arrivalRemainSeat === null;

  let payment;
  if (isOneway) {
    payment = !isPremium
      ? charge * selectStartSeatArr.length
      : (charge + PREMIUM_CHARGE) * selectStartSeatArr.length;
  } else {
    payment = !isPremium
      ? selectArrivalSeatArr.length + charge * selectStartSeatArr.length
      : (charge + PREMIUM_CHARGE) * selectArrivalSeatArr.length +
        (charge + PREMIUM_CHARGE) * selectStartSeatArr.length;
  }

  const isActive = isOneway
    ? selectStartSeatArr.length > 0
    : selectArrivalSeatArr > 0;

  const confirmHandler = () => {
    // firebase요청
    if (isOneway) {
      dispatch(ticketActions.reset());
      dateCtx.resetHandler();
      navigate('/mypage');
    } else {
      navigate('/lookup');
    }
  };

  return (
    <Wrapper>
      <PaymentDiv>
        <div>
          <p>결제금액</p>
          <span>{payment}원</span>
        </div>
        <SelectButton
          active={isActive}
          disabled={!isActive}
          onClick={confirmHandler}
        >
          선택완료
        </SelectButton>
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

  ${props =>
    props.active &&
    css`
      background: ${({ theme }) => theme.color.primaryColor};
    `}
`;

export default SeatPayment;
