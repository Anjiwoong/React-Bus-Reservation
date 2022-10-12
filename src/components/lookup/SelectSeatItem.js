import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const SelectSeatItem = props => {
  return (
    <SelectSeat>
      <span>{props.start}</span>
      <span>2시간 40분</span>
      <span>{props.seat}석</span>
      <Button>좌석선택</Button>
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
`;

export default SelectSeatItem;
