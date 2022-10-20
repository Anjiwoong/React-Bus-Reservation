import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ticketActions } from '../../store/ticket-slice';
import Button from '../UI/Button';

const SelectSeatItem = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startRemainSeat = useSelector(state => state.ticket.seat.start.remain);
  const startTime = props.start.toString().substr(8);
  const formattedStartTime = [
    startTime.slice(0, 2),
    ' : ',
    startTime.slice(2),
  ].join('');

  const calcElapsedTime = (start, arrival) => {
    const formattedStartTime = start.toString().split('');
    const formattedArrivalTime = arrival.toString().split('');

    const date1 = new Date(
      formattedStartTime.slice(0, 4).join(''),
      formattedStartTime.slice(4, 6).join(''),
      formattedStartTime.slice(6, 8).join(''),
      formattedStartTime.slice(8, 10).join(''),
      formattedStartTime.slice(10, 12).join('')
    );

    const date2 = new Date(
      formattedArrivalTime.slice(0, 4).join(''),
      formattedArrivalTime.slice(4, 6).join(''),
      formattedArrivalTime.slice(6, 8).join(''),
      formattedArrivalTime.slice(8, 10).join(''),
      formattedArrivalTime.slice(10, 12).join('')
    );

    const elapsedTime = date2.getTime() - date1.getTime();
    const elapsedMinute = elapsedTime / 1000 / 60;
    const hour = parseInt(elapsedMinute / 60);
    const minute = elapsedMinute % 60;

    return [hour, minute];
  };

  const [hour, minute] = calcElapsedTime(props.start, props.arrival);

  const seat = Math.floor(Math.random() * 27);

  const selectSeatHandler = () => {
    if (startRemainSeat === null) {
      dispatch(ticketActions.setStartRemainingSeat(seat));
    } else {
      dispatch(ticketActions.setArrivalRemainingSeat(seat));
    }

    navigate('seat');
  };

  return (
    <SelectSeat disabled={seat === 0}>
      <span>{formattedStartTime}</span>
      <span>
        {hour > 1 ? hour + '시간' : ''} {minute}분
      </span>
      <span>{seat}석</span>
      <Button to="seat" disabled={seat === 0} onClick={selectSeatHandler}>
        좌석선택
      </Button>
    </SelectSeat>
  );
};

const SelectSeat = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  font-size: ${({ theme }) => theme.size.text};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
  color: ${({ theme }) => theme.color.gray1};

  span {
    width: 25%;
    text-align: center;
  }

  span:nth-child(1) {
    font-weight: bold;
  }

  button {
    width: 25%;
    background: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.size.small};

    &:hover {
      color: ${({ theme }) => theme.color.primaryColor};
    }
  }

  ${props =>
    props.disabled &&
    css`
      button {
        &:hover {
          color: ${({ theme }) => theme.color.gray2};
        }
      }
    `}
`;

export default SelectSeatItem;
