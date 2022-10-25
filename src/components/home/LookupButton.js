import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../UI/Button';
import { BiChevronRight } from 'react-icons/bi';
import DateContext from '../../store/date-context';
import { useDispatch, useSelector } from 'react-redux';
import { ticketActions } from '../../store/ticket-slice';

const LookupButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dateCtx = useContext(DateContext);

  const { oneway } = useSelector(state => state.ticket);

  const { name: startTerminal } = useSelector(
    state => state.ticket.terminal.start
  );

  const { name: arrivalTerminal } = useSelector(
    state => state.ticket.terminal.arrival
  );

  const { allCheck } = useSelector(state => state.ticket);

  const { start, arrival } = dateCtx.date;

  useEffect(() => {
    let allCheck;

    if (oneway) {
      allCheck =
        start !== '' && startTerminal !== '선택' && arrivalTerminal !== '선택';
    } else {
      allCheck =
        start !== '' &&
        arrival !== '' &&
        startTerminal !== '선택' &&
        arrivalTerminal !== '선택';
    }

    dispatch(ticketActions.setAllCheck(allCheck));
  }, [start, arrival, dispatch, arrivalTerminal, startTerminal, oneway]);

  const navigateHandler = () => {
    if (startTerminal === '선택' && arrivalTerminal === '선택') {
      alert('출발지와 도착지를 선택해주세요.');
      return;
    }

    if (startTerminal === arrivalTerminal) {
      alert('출발지와 도착지는 같을 수 없습니다.');
      return;
    }

    if (allCheck) navigate('/home/lookup');
  };

  return (
    <Wrapper size="36px" isActive={allCheck} onClick={navigateHandler}>
      <span>배차 조회하기</span>
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
  margin-top: 30px;
  border-radius: 15px;
  background: ${props =>
    props.isActive ? props.theme.color.primaryFont : props.theme.color.gray2};
  font-size: ${({ theme }) => theme.size.text};
  color: ${({ theme }) => theme.color.white};

  ${props =>
    !props.isActive &&
    css`
      cursor: not-allowed;
    `}
`;

export default LookupButton;
