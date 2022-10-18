import React, { useContext, useEffect } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import TerminalContext from '../../store/terminal-context';
import { ticketActions } from '../../store/ticket-slice';
import Button from '../UI/Button';

const LookupButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const terminalCtx = useContext(TerminalContext);

  const { oneway } = useSelector(state => state.ticket);

  const { name: locationStart } = useSelector(
    state => state.ticket.location.start
  );

  const { name: locationArrival } = useSelector(
    state => state.ticket.location.arrival
  );

  const { allCheck } = useSelector(state => state.ticket);

  const { start } = terminalCtx.date;
  const { arrival } = terminalCtx.date;
  useEffect(() => {
    let allCheck;

    if (oneway) {
      allCheck =
        start !== '' && locationStart !== '선택' && locationArrival !== '선택';
    } else {
      allCheck =
        start !== '' &&
        arrival !== '' &&
        locationStart !== '선택' &&
        locationArrival !== '선택';
    }

    dispatch(ticketActions.setAllCheck(allCheck));
  }, [start, arrival, dispatch, locationArrival, locationStart, oneway]);

  const navigateHandler = () => {
    if (locationStart === '선택' && locationArrival === '선택') {
      alert('출발지와 도착지를 선택해주세요.');
      return;
    }

    if (locationStart === locationArrival) {
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
