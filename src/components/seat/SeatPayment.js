import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ticketActions } from '../../store/ticket-slice';
import DateContext from '../../store/date-context';
import AuthContext from '../../store/auth-context';

import styled, { css } from 'styled-components';

import { firestore, db } from '../../firebase/firebaseInit';
// import { doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';

import OnewayPayment from './payment/OnewayPayment';
import RoundTripPayment from './payment/RoundTripPayment';

const SeatPayment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateCtx = useContext(DateContext);
  const authCtx = useContext(AuthContext);

  const selectStartSeatArr = useSelector(
    state => state.ticket.seat.start.selected
  );
  const oneway = useSelector(state => state.ticket.oneway);

  const startTerminal = useSelector(state => state.ticket.location.start.name);
  const arrivalTerminal = useSelector(
    state => state.ticket.location.arrival.name
  );
  const { selected: startSelected } = useSelector(
    state => state.ticket.seat.start
  );
  const { selected: arrivalSelected } = useSelector(
    state => state.ticket.seat.arrival
  );
  const { premium, charge } = useSelector(state => state.ticket);
  const { start: startTime, arrival: arrivalTime } = useSelector(
    state => state.ticket.time
  );

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

  const uniqId1 = Math.random().toString(36).substring(2, 12);
  const uniqId2 = Math.random().toString(36).substring(2, 12);

  const onewayTicket = {
    id: uniqId1,
    date: dateCtx.date.start,
    time: startTime,
    premium,
    count: startSelected.length,
    total: charge * startSelected.length,
    start: startTerminal,
    arrival: arrivalTerminal,
  };

  const roundTripTicket = {
    id: uniqId2,
    date: dateCtx.date.arrival,
    time: arrivalTime,
    premium,
    count: arrivalSelected.length,
    total: charge * arrivalSelected.length,
    start: arrivalTerminal,
    arrival: startTerminal,
  };

  const confirmHandler = () => {
    // firebase요청
    if (arrivalRemainSeat === null && oneway) {
      firestore.collection(authCtx.token).doc(uniqId1).set(onewayTicket);

      done();
    } else if (arrivalRemainSeat !== null && !oneway) {
      firestore.collection(authCtx.token).doc(uniqId1).set(onewayTicket);
      firestore.collection(authCtx.token).doc(uniqId2).set(roundTripTicket);

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
