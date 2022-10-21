import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { ticketActions } from '../../store/ticket-slice';

const BusSeatItem = props => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  const selectedHandler = () => {
    if (!props.remain) return;

    dispatch(ticketActions.setSelectedSeat(props.num));
    setIsSelected(prev => !prev);
  };

  return (
    <SeatNumber
      remain={props.remain}
      selected={isSelected}
      onClick={selectedHandler}
    >
      {props.num}
    </SeatNumber>
  );
};

const SeatNumber = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.color.black};
  margin-right: 12px;
  margin-bottom: 12px;
  font-size: ${({ theme }) => theme.size.text};

  &:nth-child(3n) {
    margin-left: 196px;
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }

  ${props =>
    !props.remain &&
    css`
      background: ${({ theme }) => theme.color.gray3};

      &:hover {
        cursor: not-allowed;
        background: ${({ theme }) => theme.color.gray3};
        color: ${({ theme }) => theme.color.black};
      }
    `}

  ${props =>
    props.selected &&
    css`
      background: ${({ theme }) => theme.color.primaryColor};
      border: none;
      color: ${({ theme }) => theme.color.white};
    `}
`;

export default BusSeatItem;
