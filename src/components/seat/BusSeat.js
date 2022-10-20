import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BusSeatItem from './BusSeatItem';

const BusSeat = props => {
  const [remainSeatArr, setRemainSeatArr] = useState([]);
  const startRemainSeat = useSelector(state => state.ticket.seat.start.remain);
  const arrivalRemainSeat = useSelector(
    state => state.ticket.seat.arrival.remain
  );

  const seat = arrivalRemainSeat === null ? startRemainSeat : arrivalRemainSeat;

  useEffect(() => {
    let seatNumber = [
      { number: 1, remain: false },
      { number: 2, remain: false },
      { number: 3, remain: false },
      { number: 4, remain: false },
      { number: 5, remain: false },
      { number: 6, remain: false },
      { number: 7, remain: false },
      { number: 8, remain: false },
      { number: 9, remain: false },
      { number: 10, remain: false },
      { number: 11, remain: false },
      { number: 12, remain: false },
      { number: 13, remain: false },
      { number: 14, remain: false },
      { number: 15, remain: false },
      { number: 16, remain: false },
      { number: 17, remain: false },
      { number: 18, remain: false },
      { number: 19, remain: false },
      { number: 20, remain: false },
      { number: 21, remain: false },
      { number: 22, remain: false },
      { number: 23, remain: false },
      { number: 24, remain: false },
      { number: 25, remain: false },
      { number: 26, remain: false },
      { number: 27, remain: false },
    ];

    let randomNumberArr = [];
    for (let i = 0; i < seat; i++) {
      const randomNumber = Math.floor(Math.random() * 27 + 1);
      if (randomNumberArr.indexOf(randomNumber) === -1) {
        randomNumberArr.push(randomNumber);
      } else {
        i--;
      }
    }

    const remainSeat = seatNumber.map(seat =>
      randomNumberArr.some(num => num === seat.number)
        ? { ...seat, remain: !seat.remain }
        : seat
    );

    setRemainSeatArr(remainSeat);
  }, [seat]);

  return (
    <BusSeatWrapper>
      <div>
        <p>운전석</p>
        <p>출입구</p>
      </div>
      <SeatNumberWrapper>
        {remainSeatArr.map(seat => (
          <BusSeatItem
            key={seat.number}
            num={seat.number}
            remain={seat.remain}
          />
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
