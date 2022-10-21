import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import DateContext from '../../store/date-context';
import { ticketActions } from '../../store/ticket-slice';

import OnewayPayment from './payment/OnewayPayment';
import RoundTripPayment from './payment/RoundTripPayment';

const SeatPayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateCtx = useContext(DateContext);
  const selectStartSeatArr = useSelector(
    state => state.ticket.seat.start.selected
  );
  const oneway = useSelector(state => state.ticket.oneway);

  const selectArrivalSeatArr = useSelector(
    state => state.ticket.seat.arrival.selected
  );

  const arrivalRemainSeat = useSelector(
    state => state.ticket.seat.arrival.remain
  );

  const isActive =
    arrivalRemainSeat === null
      ? selectStartSeatArr.length > 0
      : selectArrivalSeatArr.length > 0;

  const done = () => {
    dispatch(ticketActions.reset());
    dateCtx.resetHandler();
    navigate('/mypage');
  };

  const confirmHandler = () => {
    // firebase요청
    if (arrivalRemainSeat === null && oneway) {
      done();
    } else if (arrivalRemainSeat !== null && !oneway) {
      done();
    } else {
      navigate('/home/lookup');
    }
  };

  return (
    <Wrapper oneway={oneway}>
      {oneway ? (
        <OnewayPayment confirmHandler={confirmHandler} isActive={isActive} />
      ) : (
        <RoundTripPayment confirmHandler={confirmHandler} isActive={isActive} />
      )}
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

  ${props =>
    !props.oneway &&
    css`
      height: 180px;
    `}
`;

export default SeatPayment;
