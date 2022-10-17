import React, { useEffect } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ticketActions } from '../../store/ticket-slice';
import Button from '../UI/Button';

const LookupButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { oneway } = useSelector(state => state.ticket);

  const { start: dateStart, arrival: dateArrival } = useSelector(
    state => state.ticket.date
  );

  const { start: locationStart, arrival: locationArrival } = useSelector(
    state => state.ticket.location
  );
  const { allCheck } = useSelector(state => state.ticket);

  useEffect(() => {
    let allCheck;

    if (oneway) {
      allCheck =
        dateStart !== '' &&
        locationStart !== '선택' &&
        locationArrival !== '선택';
    } else {
      allCheck =
        dateStart !== '' &&
        dateArrival !== '' &&
        locationStart !== '선택' &&
        locationArrival !== '선택';
    }

    dispatch(ticketActions.setAllCheck(allCheck));
  }, [
    dateArrival,
    dateStart,
    dispatch,
    locationArrival,
    locationStart,
    oneway,
  ]);

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
