import React from 'react';
import styled from 'styled-components';

const BusSeatItem = props => {
  return <SeatNumber>{props.num}</SeatNumber>;
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
    background: ${({ theme }) => theme.color.primaryColor};
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;

export default BusSeatItem;
