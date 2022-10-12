import React from 'react';
import styled from 'styled-components';
import BusSeatItem from './BusSeatItem';

const seatNumber = [
  { number: 1, full: false },
  { number: 2, full: false },
  { number: 3, full: false },
  { number: 4, full: false },
  { number: 5, full: false },
  { number: 6, full: false },
  { number: 7, full: false },
  { number: 8, full: false },
  { number: 9, full: false },
  { number: 10, full: false },
  { number: 11, full: true },
  { number: 12, full: false },
  { number: 13, full: false },
  { number: 14, full: false },
  { number: 15, full: false },
  { number: 16, full: false },
  { number: 17, full: false },
  { number: 18, full: false },
  { number: 19, full: true },
  { number: 20, full: false },
  { number: 21, full: false },
  { number: 22, full: true },
  { number: 23, full: false },
  { number: 24, full: false },
  { number: 25, full: false },
  { number: 26, full: false },
  { number: 27, full: false },
];

const BusSeat = () => {
  return (
    <BusSeatWrapper>
      <div>
        <p>운전석</p>
        <p>출입구</p>
      </div>
      <SeatNumberWrapper>
        {seatNumber.map(seat => (
          <BusSeatItem key={seat.number} num={seat.number} />
        ))}
      </SeatNumberWrapper>
    </BusSeatWrapper>
  );
};

const BusSeatWrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 540px;
  margin: 0 auto;
  padding: 30px 40px;
  border-radius: 15px;

  div {
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.size.small};
    color: ${({ theme }) => theme.color.gray1};
  }
`;

const SeatNumberWrapper = styled.ul`
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
`;

export default BusSeat;
