import React, { useEffect, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../UI/Button';

const LookupButton = () => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  const { oneway } = useSelector(state => state.ticket);

  const { start: dateStart, arrival: dateArrival } = useSelector(
    state => state.ticket.date
  );

  const { start: locationStart, arrival: locationArrival } = useSelector(
    state => state.ticket.location
  );

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

    setIsValid(allCheck);
  }, [dateArrival, dateStart, locationStart, locationArrival, oneway]);

  const navigateHandler = () => {
    if (locationStart === locationArrival) {
      alert('출발지와 도착지는 같을 수 없습니다.');
      return;
    }
    if (isValid) navigate('/lookup');
  };

  return (
    <Wrapper isActive={isValid} onClick={navigateHandler}>
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

  svg {
    font-size: ${({ theme }) => theme.size.medium1};
  }
`;

export default LookupButton;
