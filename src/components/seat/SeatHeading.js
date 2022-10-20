import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const SeatHeading = () => {
  const startRemainSeat = useSelector(state => state.ticket.seat.start.remain);
  const arrivalRemainSeat = useSelector(
    state => state.ticket.seat.arrival.remain
  );

  return (
    <Wrapper>
      <p>좌석 선택</p>
      <div>
        <p>
          전체 <AllSeat>27</AllSeat>석
        </p>
        <p>
          잔여
          <LeftSeat>
            {arrivalRemainSeat === null
              ? ' ' + startRemainSeat
              : ' ' + arrivalRemainSeat}
          </LeftSeat>
          석
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 540px;
  margin: 0 auto;
  padding-top: 45px;
  padding-bottom: 30px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.size.text};
  color: ${({ theme }) => theme.color.black};

  div {
    display: flex;

    p {
      position: relative;
      font-size: ${({ theme }) => theme.size.small};
      font-weight: 400;
      color: ${({ theme }) => theme.color.primaryFont};

      &:nth-child(1) {
        margin-right: 30px;

        &::after {
          content: '';
          position: absolute;
          display: flex;
          align-items: center;
          top: 60%;
          transform: translateY(-50%);
          right: -15px;
          border-right: 1px solid ${({ theme }) => theme.color.black};
          height: 20px;
        }
      }
    }
  }
`;

const AllSeat = styled.span`
  font-size: ${({ theme }) => theme.size.medium2};
`;

const LeftSeat = styled.span`
  font-size: ${({ theme }) => theme.size.medium2};
`;

export default SeatHeading;
